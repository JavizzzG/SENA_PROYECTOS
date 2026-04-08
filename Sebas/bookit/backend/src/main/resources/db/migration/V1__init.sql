-- Services table
CREATE TABLE IF NOT EXISTS services (
    id          BIGSERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    description TEXT,
    duration    INT NOT NULL
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
    id             BIGSERIAL PRIMARY KEY,
    client_name    VARCHAR(150) NOT NULL,
    client_email   VARCHAR(255) NOT NULL,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status         VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    service_id     BIGINT NOT NULL REFERENCES services(id),
    created_at     TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Seed services
INSERT INTO services (name, description, duration) VALUES
    ('Corte de Cabello', 'Corte profesional adaptado a tu estilo y tipo de cabello.', 45),
    ('Asesoría Académica', 'Sesión personalizada de apoyo en materias universitarias o de bachillerato.', 60),
    ('Consulta Técnica', 'Diagnóstico y asesoramiento técnico para equipos o software.', 30),
    ('Tutoría Personalizada', 'Refuerzo educativo en áreas específicas con seguimiento continuo.', 90),
    ('Consulta Nutricional', 'Evaluación nutricional y elaboración de plan alimenticio personalizado.', 50)
ON CONFLICT DO NOTHING;
