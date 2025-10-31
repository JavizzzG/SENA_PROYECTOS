package Controller;

import Model.Employee;
import Model.Person;
import Model.TemporaryEmployee;

import java.util.Scanner;

public class TEmployeeController {

    public void registerNewTemporaryEmployee(){
        Scanner scan = new Scanner(System.in);
        TemporaryEmployee tEmployee = new TemporaryEmployee();
        System.out.println("Enter the DNI of the employee: ");
        String numDNI = scan.nextLine();
        Person personExist = tEmployee.getDataPerson(numDNI);
        Employee employeeExist = tEmployee.getDataEmployee(numDNI);
        TemporaryEmployee tEmployeeExist = tEmployee.getDataTemporaryEmployee(numDNI);

        if(tEmployeeExist.getCodEmployee() != null){
            System.out.println("The temporary employee already exist");
        }else{
            System.out.println("Honorary for hour: ");
            Double honoraryForHour = scan.nextDouble();
            scan.nextLine();
            System.out.println("Contract end date: ");
            String contractEndDate = scan.nextLine();

            tEmployeeExist.setHonoraryHour(honoraryForHour);
            tEmployeeExist.setContractEndDate(contractEndDate);

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

            tEmployeeExist.setNumDNI(personExist.getNumDNI());
            tEmployeeExist.setName(personExist.getName());
            tEmployeeExist.setLastName(personExist.getLastName());
            tEmployeeExist.setBirthDate(personExist.getBirthDate());
            tEmployeeExist.setAddress(personExist.getAddress());
            tEmployeeExist.setCityOrigin(personExist.getCityOrigin());
            tEmployeeExist.setCodEmployee(employeeExist.getCodEmployee());
            tEmployeeExist.setNumOvertime(employeeExist.getNumOvertime());
            tEmployeeExist.setDateAdmission(employeeExist.getDateAdmission());
            tEmployeeExist.setArea(employeeExist.getArea());
            tEmployeeExist.setPosition(employeeExist.getPosition());
            tEmployeeExist.setHonoraryHour(honoraryForHour);
            tEmployeeExist.setContractEndDate(contractEndDate);

            tEmployeeExist.dataRegisterTemporaryEmployee(tEmployeeExist);
            System.out.println("Data registered correctly");
        }
    }

    public void showTemporaryEmployee(){
        Scanner scan = new Scanner(System.in);
        TemporaryEmployee tEmployee = new TemporaryEmployee();
        System.out.println("Enter the DNI of the temporary employee: ");
        String numDNI = scan.nextLine();
        TemporaryEmployee tEmployeeExist = tEmployee.getDataTemporaryEmployee(numDNI);
        if(tEmployeeExist.getCodEmployee() != null){
            tEmployeeExist.printData();
            return;
        }
        System.out.println("The temporary employee does not exist");
    }
}
