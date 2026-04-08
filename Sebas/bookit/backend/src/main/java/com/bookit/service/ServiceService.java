package com.bookit.service;

import com.bookit.dto.ServiceDto;
import com.bookit.exception.NotFoundException;
import com.bookit.model.Service;
import com.bookit.repository.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ServiceService {

    private final ServiceRepository serviceRepository;

    public List<ServiceDto.Response> findAll() {
        return serviceRepository.findAll().stream()
                .map(this::toResponse)
                .toList();
    }

    public Service findEntityById(Long id) {
        return serviceRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Servicio no encontrado con id: " + id));
    }

    public ServiceDto.Response toResponse(Service s) {
        ServiceDto.Response r = new ServiceDto.Response();
        r.setId(s.getId());
        r.setName(s.getName());
        r.setDescription(s.getDescription());
        r.setDuration(s.getDuration());
        return r;
    }
}
