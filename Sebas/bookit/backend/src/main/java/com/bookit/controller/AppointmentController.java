package com.bookit.controller;

import com.bookit.dto.AppointmentDto;
import com.bookit.model.AppointmentStatus;
import com.bookit.service.AppointmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointments")
@RequiredArgsConstructor
public class AppointmentController {

    private final AppointmentService appointmentService;

    @GetMapping
    public ResponseEntity<List<AppointmentDto.Response>> getAll(
            @RequestParam(required = false) AppointmentStatus status) {
        return ResponseEntity.ok(appointmentService.findAll(status));
    }

    @PostMapping
    public ResponseEntity<AppointmentDto.Response> create(
            @Valid @RequestBody AppointmentDto.CreateRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(appointmentService.create(request));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<AppointmentDto.Response> updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody AppointmentDto.StatusUpdateRequest request) {
        return ResponseEntity.ok(appointmentService.updateStatus(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        appointmentService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
