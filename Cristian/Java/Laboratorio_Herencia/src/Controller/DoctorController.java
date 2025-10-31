package Controller;

import Model.*;

import java.util.Scanner;

public class DoctorController {
    public void registerNewDoctor(){
        Scanner scan = new Scanner(System.in);
        Doctor doctor = new Doctor();
        System.out.println("Enter the DNI of the doctor: ");
        String numDNI = scan.nextLine();
        Person personExist = doctor.getDataPerson(numDNI);
        Employee employeeExist = doctor.getDataEmployee(numDNI);
        PermanentEmployee permanentEmployeeExist = doctor.getDataPermanentEmployee(numDNI);
        Doctor doctorExist = doctor.getDataDoctor(numDNI);

        if(doctorExist.getCodEmployee() != null){
            System.out.println("The doctor already exist");
        }else {
            System.out.println("Specialty: ");
            String specialty = scan.nextLine();
            System.out.println("Office number: ");
            String numOffice = scan.nextLine();

            doctorExist.setSpecialty(specialty);
            doctorExist.setNumOffice(numOffice);

            if (permanentEmployeeExist.getCodEmployee() != null) {
                System.out.println("The permanent employee already exist");
            } else {
                System.out.println("Monthly salary: ");
                Double monthlySalary = scan.nextDouble();
                scan.nextLine();
                System.out.println("Percent overtime: ");
                Double percentOvertime = scan.nextDouble();
                scan.nextLine();

                permanentEmployeeExist.setMonthlySalary(monthlySalary);
                permanentEmployeeExist.setPercentOvertime(percentOvertime);

                if (employeeExist.getCodEmployee() != null) {
                    System.out.println("The employee already exist");
                } else {
                    System.out.println("Number of hours overtime");
                    Long numOvertime = scan.nextLong();
                    scan.nextLine();
                    System.out.println("Date admission: ");
                    String dateAdmission = scan.nextLine();
                    System.out.println("Area: ");
                    String area = scan.nextLine();
                    System.out.println("Position: ");
                    String position = scan.nextLine();

                    employeeExist.setCodEmployee(numDNI);
                    employeeExist.setNumOvertime(numOvertime);
                    employeeExist.setDateAdmission(dateAdmission);
                    employeeExist.setArea(area);
                    employeeExist.setPosition(position);

                    if (personExist.getNumDNI() != null) {
                        System.out.println("The person already exist");
                    } else {
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

                        personExist.setNumDNI(numDNI);
                        personExist.setName(name);
                        personExist.setLastName(lastName);
                        personExist.setBirthDate(birthDate);
                        personExist.setAddress(address);
                        personExist.setCityOrigin(cityOrigin);

                        personExist.dataRegisterPerson(personExist);

                    }
                }
                permanentEmployeeExist.setNumDNI(personExist.getNumDNI());
                permanentEmployeeExist.setName(personExist.getName());
                permanentEmployeeExist.setLastName(personExist.getLastName());
                permanentEmployeeExist.setBirthDate(personExist.getBirthDate());
                permanentEmployeeExist.setAddress(personExist.getAddress());
                permanentEmployeeExist.setCityOrigin(personExist.getCityOrigin());
                permanentEmployeeExist.setCodEmployee(employeeExist.getCodEmployee());
                permanentEmployeeExist.setNumOvertime(employeeExist.getNumOvertime());
                permanentEmployeeExist.setDateAdmission(employeeExist.getDateAdmission());
                permanentEmployeeExist.setArea(employeeExist.getArea());
                permanentEmployeeExist.setPosition(employeeExist.getPosition());

                permanentEmployeeExist.dataRegisterPermanentEmployee(permanentEmployeeExist);
            }

            doctorExist.setNumDNI(permanentEmployeeExist.getNumDNI());
            doctorExist.setName(permanentEmployeeExist.getName());
            doctorExist.setLastName(permanentEmployeeExist.getLastName());
            doctorExist.setBirthDate(permanentEmployeeExist.getBirthDate());
            doctorExist.setAddress(permanentEmployeeExist.getAddress());
            doctorExist.setCityOrigin(permanentEmployeeExist.getCityOrigin());
            doctorExist.setCodEmployee(permanentEmployeeExist.getCodEmployee());
            doctorExist.setNumOvertime(permanentEmployeeExist.getNumOvertime());
            doctorExist.setDateAdmission(permanentEmployeeExist.getDateAdmission());
            doctorExist.setArea(permanentEmployeeExist.getArea());
            doctorExist.setPosition(permanentEmployeeExist.getPosition());

            doctorExist.dataRegisterDoctor(doctorExist);
        }

    }

    public void showDoctor(){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the DNI of the doctor: ");
        String numDNI = scan.nextLine();
        Doctor doctor = new Doctor();
        Doctor doctorExist = doctor.getDataDoctor(numDNI);
        if(doctorExist.getCodEmployee() != null){
            doctorExist.printData();
            return;
        }
        System.out.println("The doctor does not exist");
    }
}
