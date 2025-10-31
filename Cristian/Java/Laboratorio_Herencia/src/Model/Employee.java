package Model;

import Utils.Maps;

import java.util.List;
import java.util.Map;

public class Employee extends Person {

    private String codEmployee;
    private Long numOvertime;
    private String dateAdmission;
    private String area;
    private String position;

    public Employee(String numDNI, String name, String lastName, String birthDate, String address, String cityOrigin, String codEmployee, Long numOvertime, String dateAdmission, String area, String position) {

        super(numDNI, name, lastName, birthDate, address, cityOrigin);
        this.codEmployee = codEmployee;
        this.numOvertime = numOvertime;
        this.dateAdmission = dateAdmission;
        this.area = area;
        this.position = position;
    }

    public Employee(){};

    public Employee getDataEmployee(String codEmployee){
        Map<String, List<Employee>> employeeMap = Maps.getEmployeeMap();
        List<Employee> empoyeeListExist = employeeMap.get(codEmployee);

        if(empoyeeListExist == null || empoyeeListExist.isEmpty()){
            return new Employee();
        }

        return empoyeeListExist.stream()
                .map(Employee.class::cast)
                .findFirst()
                .orElse(new Employee());
    }

    @Override
    public void printData(){
        super.printData();
        System.out.println("CodEmployee: " + this.codEmployee);
        System.out.println("NumOvertime: " + this.numOvertime);
        System.out.println("DateAdmission: " + this.dateAdmission);
        System.out.println("Area: " + this.area);
        System.out.println("Position: " + this.position);
    }

    public String getCodEmployee() {
        return codEmployee;
    }
    public void setCodEmployee(String codEmployee) {
        this.codEmployee = codEmployee;
    }

    public Long getNumOvertime() {
        return numOvertime;
    }
    public void setNumOvertime(Long numOvertime) {
        this.numOvertime = numOvertime;
    }

    public String getDateAdmission() {
        return dateAdmission;
    }
    public void setDateAdmission(String dateAdmission) {
        this.dateAdmission = dateAdmission;
    }

    public String getArea() {
        return area;
    }
    public void setArea(String area) {
        this.area = area;
    }

    public String getPosition() {
        return position;
    }
    public void setPosition(String position) {
        this.position = position;
    }
}
