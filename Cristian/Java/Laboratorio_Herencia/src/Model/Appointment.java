package Model;

import Utils.Maps;

import java.util.Map;

public class Appointment {
    private String codAppointment;
    private String date;
    private String time;
    private String description;
    private String codDoctor;
    private String codPatient;

    public Appointment(String codAppointment, String date, String time, String description, String codDoctor, String codPatient) {
        this.codAppointment = codAppointment;
        this.date = date;
        this.time = time;
        this.description = description;
        this.codDoctor = codDoctor;
        this.codPatient = codPatient;
    }

    public Appointment(){};

    public void dataRegisterAppointment(Appointment appointment){
        Maps.newAppointmentMap(appointment);
    }

    public Appointment getDataAppointment(String codAppointment){
        if(Maps.getAppointmentMap().get(codAppointment) == null){
            return new Appointment();
        }
        return Maps.appointmentMap.get(codAppointment);
    }

    public void printData(){
        System.out.println("Code of the appointment: " + getCodAppointment());
        System.out.println("Date of the appointment: " + getDate());
        System.out.println("Time of the appointment: " + getTime());
        System.out.println("Description of the appointment: " + getDescription());
        System.out.println("Code of the doctor: " + getCodDoctor());
        System.out.println("Code of the patient: " + getCodPatient());
    }

    public String getCodAppointment() {
        return codAppointment;
    }

    public void setCodAppointment(String codAppointment) {
        this.codAppointment = codAppointment;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCodDoctor() {
        return codDoctor;
    }

    public void setCodDoctor(String codDoctor) {
        this.codDoctor = codDoctor;
    }

    public String getCodPatient() {
        return codPatient;
    }

    public void setCodPatient(String codPatient) {
        this.codPatient = codPatient;
    }

}
