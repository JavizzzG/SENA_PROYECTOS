package Model;

import Utils.Maps;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

public class PermanentEmployee extends Employee {

    private Double monthlySalary;
    private Double percentOvertime;

    public PermanentEmployee(String numDNI, String name, String lastName, String birthDate, String address, String cityOrigin, String codEmployee, Long numOvertime, String dateAdmission, String area, String position, Double monthlySalary, Double percentOvertime) {

        super(numDNI, name, lastName, birthDate, address, cityOrigin, codEmployee, numOvertime, dateAdmission, area, position);
        this.monthlySalary = monthlySalary;
        this.percentOvertime = percentOvertime;
    }

    public PermanentEmployee(){};

    public PermanentEmployee getDataPermanentEmployee(String codEmployee){
        List<Employee> employeeList = Maps.getEmployeeMap().get(codEmployee);

        if(employeeList == null || employeeList.isEmpty()){
            System.out.println("Employee not found");
            return new PermanentEmployee();
        }

         return employeeList.stream()
                .filter(PermanentEmployee.class::isInstance)
                .map(PermanentEmployee.class::cast)
                .findFirst()
                .orElse(new PermanentEmployee());

    }

    @Override
    public void printData(){
        super.printData();
        System.out.println("Monthly salary: " + this.monthlySalary);
        System.out.println("Percent overtime: " + this.percentOvertime);
    }

    public void dataRegisterPermanentEmployee(PermanentEmployee permanentEmployee){
        Maps.newEmployeeMap(permanentEmployee);
    }

    public Double getMonthlySalary() {
        return monthlySalary;
    }
    public void setMonthlySalary(Double monthlySalary) {
        this.monthlySalary = monthlySalary;
    }

    public Double getPercentOvertime() {
        return percentOvertime;
    }
    public void setPercentOvertime(Double percentOvertime) {
        this.percentOvertime = percentOvertime;
    }
}
