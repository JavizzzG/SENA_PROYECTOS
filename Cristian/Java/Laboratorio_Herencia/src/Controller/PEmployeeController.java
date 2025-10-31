package Controller;

import Model.Employee;
import Model.PermanentEmployee;
import Model.Person;

import java.util.Scanner;

public class PEmployeeController {

    public void registerNewPermanentEmployee(){
        Scanner scan = new Scanner(System.in);
        PermanentEmployee pEmployee = new PermanentEmployee();
        System.out.println("Enter the DNI of the employee: ");
        String numDNI = scan.nextLine();
        Person personExist = pEmployee.getDataPerson(numDNI);
        Employee employeeExist = pEmployee.getDataEmployee(numDNI);
        PermanentEmployee pEmployeeExist = pEmployee.getDataPermanentEmployee(numDNI);

        if(pEmployeeExist.getCodEmployee() != null){
            System.out.println("The permanent employee already exist");
        }else {
            System.out.println("Monthly salary: ");
            Double monthlySalary = scan.nextDouble();
            scan.nextLine();
            System.out.println("Percent overtime: ");
            Double percentOvertime = scan.nextDouble();
            scan.nextLine();

            pEmployeeExist.setMonthlySalary(monthlySalary);
            pEmployeeExist.setPercentOvertime(percentOvertime);

            if(employeeExist.getCodEmployee() != null){
                System.out.println("The employee already exist");
            }else{
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

                if(personExist.getNumDNI() != null){
                    System.out.println("The person already exist");
                }else{
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


            pEmployeeExist.setNumDNI(personExist.getNumDNI());
            pEmployeeExist.setName(personExist.getName());
            pEmployeeExist.setLastName(personExist.getLastName());
            pEmployeeExist.setBirthDate(personExist.getBirthDate());
            pEmployeeExist.setAddress(personExist.getAddress());
            pEmployeeExist.setCityOrigin(personExist.getCityOrigin());
            pEmployeeExist.setCodEmployee(employeeExist.getCodEmployee());
            pEmployeeExist.setNumOvertime(employeeExist.getNumOvertime());
            pEmployeeExist.setDateAdmission(employeeExist.getDateAdmission());
            pEmployeeExist.setArea(employeeExist.getArea());
            pEmployeeExist.setPosition(employeeExist.getPosition());


            pEmployeeExist.dataRegisterPermanentEmployee(pEmployeeExist);
            System.out.println("Data registered correctly");
        }

    }

    public void showPermanentEmployee(){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the DNI of the employee: ");
        String numDNI = scan.nextLine();
        PermanentEmployee pEmployee = new PermanentEmployee();
        PermanentEmployee pEmployeeExist = pEmployee.getDataPermanentEmployee(numDNI);
        if(pEmployeeExist.getCodEmployee() != null){
            pEmployeeExist.printData();
            return;
        }
        System.out.println("The permanent employee does not exist");
    }
}
