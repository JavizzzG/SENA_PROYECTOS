package Controller;

import Model.Patient;
import Model.Person;

import java.util.Scanner;

public class PatientController {
    public void registerNewPatient(){
        Scanner scan = new Scanner(System.in);
        Patient patient = new Patient();
        System.out.println("Número DNI: ");
        String numDNI = scan.nextLine();
        Person personExist = patient.getDataPerson(numDNI);
        Patient patientExist = patient.getDataPatient(numDNI);
        if(patientExist.getNumClinicHistory() != null){
            System.out.println("The patient already exists");
            return;
        }

        if((personExist != null)){
            System.out.println("The person already exists, but information about patient is missing");
            System.out.println("Sex: ");
            String sex = scan.nextLine();
            System.out.println("Blood: ");
            String blood = scan.nextLine();
            System.out.println("Medication that cause allergic");
            String medicationAllergic = scan.nextLine();

            patient.setNumDNI(personExist.getNumDNI());
            patient.setName(personExist.getName());
            patient.setLastName(personExist.getLastName());
            patient.setBirthDate(personExist.getBirthDate());
            patient.setAddress(personExist.getAddress());
            patient.setCityOrigin(personExist.getCityOrigin());
            patient.setNumClinicHistory(numDNI);
            patient.setSex(sex);
            patient.setBlood(blood);
            patient.setMedicationAllergic(medicationAllergic);

            patient.dataRegister(patient);
            System.out.println("The patient was registered successfully");
            return;
        }

            System.out.println("Name: ");
            String name = scan.nextLine();
            System.out.println("Last name: ");
            String lastName = scan.nextLine();
            System.out.println("Birth date: ");
            String birthDate = scan.nextLine();
            System.out.println("Address: ");
            String address = scan.nextLine();
            System.out.println("City origin: ");
            String cityOrigin = scan.nextLine();
            System.out.println("Sex: ");
            String sex = scan.nextLine();
            System.out.println("Blood: ");
            String blood = scan.nextLine();
            System.out.println("Medication that cause allergic: ");
            String medicationAllergic = scan.nextLine();

            patient.setNumDNI(numDNI);
            patient.setName(name);
            patient.setLastName(lastName);
            patient.setBirthDate(birthDate);
            patient.setAddress(address);
            patient.setCityOrigin(cityOrigin);
            patient.setNumClinicHistory(numDNI);
            patient.setSex(sex);
            patient.setBlood(blood);
            patient.setMedicationAllergic(medicationAllergic);

            patient.dataRegister(patient);
            patient.dataRegisterPerson(patient);
            System.out.println("The person and patient was registered successfully");
    }

    public void showPatient(){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the DNI of the patient: ");
        String numDNI = scan.nextLine();
        Patient patient = new Patient();
        Patient patientExist = patient.getDataPatient(numDNI);
        if(patientExist.getNumClinicHistory() != null){
            patientExist.printData();
            return;
        }
        System.out.println("The patient does not exist");
    }

}
