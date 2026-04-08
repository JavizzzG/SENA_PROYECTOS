package com.bookit.service;

import com.bookit.dto.AppointmentDto;
import com.bookit.exception.BusinessException;
import com.bookit.exception.NotFoundException;
import com.bookit.model.Appointment;
import com.bookit.model.AppointmentStatus;
import com.bookit.model.Service;
import com.bookit.repository.AppointmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Component
@RequiredArgsConstructor
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final ServiceService serviceService;

    public List<AppointmentDto.Response> findAll(AppointmentStatus status) {
        List<Appointment> appointments = (status != null)
                ? appointmentRepository.findByStatus(status)
                : appointmentRepository.findAll();
        return appointments.stream().map(this::toResponse).toList();
    }

    @Transactional
    public AppointmentDto.Response create(AppointmentDto.CreateRequest req) {
        Service service = serviceService.findEntityById(req.getServiceId());

        Appointment appointment = new Appointment();
        appointment.setClientName(req.getClientName());
        appointment.setClientEmail(req.getClientEmail());
        appointment.setAppointmentDate(req.getAppointmentDate());
        appointment.setAppointmentTime(req.getAppointmentTime());
        appointment.setStatus(AppointmentStatus.PENDING);
        appointment.setService(service);

        return toResponse(appointmentRepository.save(appointment));
    }

    @Transactional
    public AppointmentDto.Response updateStatus(Long id, AppointmentDto.StatusUpdateRequest req) {
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Cita no encontrada con id: " + id));

        AppointmentStatus current = appointment.getStatus();
        AppointmentStatus next = req.getStatus();

        // Business rules
        if (current == AppointmentStatus.CANCELLED && next == AppointmentStatus.DONE) {
            throw new BusinessException("Una cita cancelada no puede marcarse como atendida.");
        }
        if (current == AppointmentStatus.DONE && next == AppointmentStatus.CANCELLED) {
            throw new BusinessException("Una cita atendida no puede cancelarse.");
        }

        appointment.setStatus(next);
        return toResponse(appointmentRepository.save(appointment));
    }

    @Transactional
    public void delete(Long id) {
        if (!appointmentRepository.existsById(id)) {
            throw new NotFoundException("Cita no encontrada con id: " + id);
        }
        appointmentRepository.deleteById(id);
    }

    private AppointmentDto.Response toResponse(Appointment a) {
        AppointmentDto.Response r = new AppointmentDto.Response();
        r.setId(a.getId());
        r.setClientName(a.getClientName());
        r.setClientEmail(a.getClientEmail());
        r.setAppointmentDate(a.getAppointmentDate());
        r.setAppointmentTime(a.getAppointmentTime());
        r.setStatus(a.getStatus());
        r.setService(serviceService.toResponse(a.getService()));
        r.setCreatedAt(a.getCreatedAt());
        return r;
    }
}
