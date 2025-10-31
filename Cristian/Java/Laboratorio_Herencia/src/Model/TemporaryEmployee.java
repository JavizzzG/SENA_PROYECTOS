package Model;

import Utils.Maps;

import java.util.List;

public class TemporaryEmployee extends Employee {

    private Double honoraryHour;
    private String contractEndDate;

    public TemporaryEmployee(String numDNI, String name, String lastName, String birthDate, String address, String cityOrigin, String codEmployee, Long numOvertime, String dateAdmission, String area, String position, Double honoraryHour, String contractEndDate) {

        super(numDNI, name, lastName, birthDate, address, cityOrigin, codEmployee, numOvertime, dateAdmission, area, position);
        this.honoraryHour = honoraryHour;
        this.contractEndDate = contractEndDate;
    }

    public TemporaryEmployee(){};

    public TemporaryEmployee getDataTemporaryEmployee(String codEmployee){
        List<Employee> employeeList = Maps.getEmployeeMap().get(codEmployee);

        if(employeeList == null || employeeList.isEmpty()){
            System.out.println("Employee not found");
            return new TemporaryEmployee();
        }

        return employeeList.stream()
                .filter(TemporaryEmployee.class::isInstance)
                .map(TemporaryEmployee.class::cast)
                .findFirst()
                .orElse(new TemporaryEmployee());
    }

    @Override
    public void printData(){
        super.printData();
        System.out.println("HonoraryHour: " + this.honoraryHour);
        System.out.println("ContractEndDate: " + this.contractEndDate);
    }

    public void dataRegisterTemporaryEmployee(TemporaryEmployee temporaryEmployee){
        Maps.newEmployeeMap(temporaryEmployee);
    }

    public Double getHonoraryHour() {
        return honoraryHour;
    }
    public void setHonoraryHour(Double honoraryHour) {
        this.honoraryHour = honoraryHour;
    }

    public String getContractEndDate() {
        return contractEndDate;
    }
    public void setContractEndDate(String contractEndDate) {
        this.contractEndDate = contractEndDate;
    }
}
