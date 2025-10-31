package Controller;

import Model.Appointment;
import Model.Doctor;
import Model.Patient;

import java.util.Scanner;

public class AppointmentController {

    public void createNewAppointment(){
        Scanner scan = new Scanner(System.in);
        Doctor doctor = new Doctor();
        Patient patient = new Patient();
        System.out.println("Enter the code of the appointment: ");
        String codAppointment = scan.nextLine();
        System.out.println("Enter the date of the appointment: ");
        String date = scan.nextLine();
        System.out.println("Enter the time of the appointment: ");
        String time = scan.nextLine();
        System.out.println("Enter the description of the appointment");
        String description = scan.nextLine();
        System.out.println("Enter the code of the doctor: ");
        String codDoctor = scan.nextLine();
        if(doctor.getDataDoctor(codDoctor).getCodEmployee() == null){
            System.out.println("Doctor doesn't exist");
            return;
        }
        System.out.println("Enter the code of the patient: ");
        String codPatient = scan.nextLine();
        if(patient.getDataPatient(codPatient).getNumClinicHistory() == null){
            System.out.println("Patient doesn't exist");
            return;
        }
        Appointment appointment = new Appointment(codAppointment, date, time, description, codDoctor, codPatient);
        appointment.dataRegisterAppointment(appointment);
        System.out.println("Appointment created successfully");
    }

    public void showAppointment(){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the code of the appointment: ");
        String codAppointment = scan.nextLine();
        Appointment appointment = new Appointment();
        Appointment appointmentExist = appointment.getDataAppointment(codAppointment);
        if(appointmentExist.getCodAppointment() != null){
            appointmentExist.printData();
            return;
        }
        System.out.println("The appointment does not exist");
    }

}
