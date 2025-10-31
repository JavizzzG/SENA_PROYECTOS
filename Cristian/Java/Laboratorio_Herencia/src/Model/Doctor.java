package Model;

import Utils.Maps;

import java.util.List;

public class Doctor extends PermanentEmployee {

    private String specialty;
    private String numOffice;

    public Doctor(String numDNI, String name, String lastName, String birthDate, String address, String cityOrigin, String codEmployee, Long numOvertime, String dateAdmission, String area, String position, Double monthlySalary, Double percentOvertime, String specialty, String numOffice) {

        super(numDNI, name, lastName, birthDate, address, cityOrigin, codEmployee, numOvertime, dateAdmission, area, position, monthlySalary, percentOvertime);
        this.specialty = specialty;
        this.numOffice = numOffice;
    }

    public Doctor(){};

    public Doctor getDataDoctor(String codEmployee){
        List<Employee> employeeList = Maps.getEmployeeMap().get(codEmployee);

        if(employeeList == null || employeeList.isEmpty()){
            System.out.println("Employee not found");
            return new Doctor();
        }

        return employeeList.stream()
                .filter(Doctor.class::isInstance)
                .map(Doctor.class::cast)
                .findFirst()
                .orElse(new Doctor());
    }

    @Override
    public void printData(){
        super.printData();
        System.out.println("Specialty: " + this.specialty);
        System.out.println("NumOffice: " + this.numOffice);
    }

    public void dataRegisterDoctor(Doctor doctor){
        Maps.newEmployeeMap(doctor);
    }

    public String getSpecialty() {
        return specialty;
    }
    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public String getNumOffice() {
        return numOffice;
    }
    public void setNumOffice(String numOffice) {
        this.numOffice = numOffice;
    }
}
