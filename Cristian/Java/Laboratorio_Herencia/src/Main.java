import Controller.TEmployeeController;
import Model.*;
import Utils.Maps;
import Utils.Selector;

public class Main {
    public static void main(String[] args){
        Patient patient = new Patient("123", "Javizzz", "Galvis", "11/02/2008", "javizzz@gmail.com", "Armenia", "123", "M", "O+", "Nothing");
        TemporaryEmployee temporaryEmployee = new TemporaryEmployee("123", "Javizzz", "Galvis", "11/02/2008", "javizzz@gmail.com", "Armenia", "123", 12L, "12/12/2025", "Cleaning", "Cleaner", 12.0, "12/12/2025");
        PermanentEmployee permanentEmployee = new PermanentEmployee("123", "Javizzz", "Galvis", "11/02/2008", "javizzz@gmail.com", "Armenia", "123", 12L, "12/12/2025", "Cleaning", "Cleaner", 12.0, 0.15);
        Doctor doctor = new Doctor("123", "Javizzz", "Galvis", "11/02/2008", "javizzz@gmail.com", "Armenia", "123", 12L, "12/12/2025", "Cleaning", "Cleaner", 12.0, 0.15, "Cardiology", "4");
        Appointment appointment = new Appointment("123", "12/12/2025", "10:00", "Bla bla bla", "123", "123");

        Maps.newPatientMap(patient);
        Maps.newEmployeeMap(temporaryEmployee);
        Maps.newEmployeeMap(permanentEmployee);
        Maps.newEmployeeMap(doctor);
        Maps.newAppointmentMap(appointment);

        Selector selector = new Selector();
        selector.selectAction();
    }

}
