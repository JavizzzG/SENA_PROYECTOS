package Utils;

import Model.Appointment;
import Model.Employee;
import Model.Patient;
import Model.Person;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Maps {
    public static Map<String, Person> personMap = new HashMap<String, Person>();
    public static Map<String, Patient> patientMap = new HashMap<String, Patient>();
    public static Map<String, List<Employee>> employeeMap = new HashMap<String, List<Employee>>();
    public static Map<String, Appointment> appointmentMap = new HashMap<String, Appointment>();

    public Map<String, Person> getPersonMap() {
        return personMap;
    }

    public static void newPersonMap(Person person) {
        personMap.put(person.getNumDNI(), person);
    }

    public static Map<String, Patient> getPatientMap() {
        return patientMap;
    }

    public static void newPatientMap(Patient patient) {
        patientMap.put(patient.getNumClinicHistory(), patient);
    }

    public static Map<String, List<Employee>> getEmployeeMap() {
        return employeeMap;
    }

    public static void newEmployeeMap(Employee employee){
        employeeMap.computeIfAbsent(employee.getCodEmployee(), x -> new ArrayList<>()).add(employee);
    }

    public static Map<String, Appointment> getAppointmentMap() {
        return appointmentMap;
    }

    public static void newAppointmentMap(Appointment appointment){
        appointmentMap.put(appointment.getCodAppointment(), appointment);
    }
}
