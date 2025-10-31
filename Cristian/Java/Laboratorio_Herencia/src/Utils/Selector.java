package Utils;

import Controller.*;
import Model.Doctor;
import Model.PermanentEmployee;
import Model.TemporaryEmployee;

import java.util.Scanner;

public class Selector {
    public void selectAction(){
        Scanner scan = new Scanner(System.in);
        PatientController patientController = new PatientController();
        PEmployeeController pEmployeController = new PEmployeeController();
        TEmployeeController tEmployeController = new TEmployeeController();
        DoctorController doctorController = new DoctorController();
        AppointmentController appointmentController = new AppointmentController();

        Boolean active = true;
        while(active){
            System.out.println("""
                Choose an option:
                
                1)New Patient
                2)Show Patient
                
                3)New Temporary Employee
                4)Show Temporary Employee
                
                5)New Permanent Employee
                6)Show Permanent Employee
                
                7)New Doctor
                8)Show Doctor
                
                9)New Appointment
                10)Show Appointment
                
                11)Exit
                
                """);

            String option = scan.nextLine();

            switch(option){
                case "1": {
                    patientController.registerNewPatient();
                    break;
                }

                case "2": {
                    patientController.showPatient();
                    break;
                }

                case "3": {
                    tEmployeController.registerNewTemporaryEmployee();
                    break;
                }

                case "4": {
                    tEmployeController.showTemporaryEmployee();
                    break;
                }

                case "5": {
                    pEmployeController.registerNewPermanentEmployee();
                    break;
                }

                case "6": {
                    pEmployeController.showPermanentEmployee();
                    break;
                }

                case "7": {
                    doctorController.registerNewDoctor();
                    break;
                }

                case "8": {
                    doctorController.showDoctor();
                    break;
                }

                case "9": {
                    appointmentController.createNewAppointment();
                    break;
                }

                case "10": {
                    appointmentController.showAppointment();
                    break;
                }

                case "11": {
                    active = false;
                    break;
                }

                default: {
                    System.out.println("Invalid option");
                    break;
                }
            }
        }
    }
}
