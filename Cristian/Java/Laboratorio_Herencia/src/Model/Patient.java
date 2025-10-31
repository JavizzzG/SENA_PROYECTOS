package Model;

import Utils.Maps;

public class Patient extends Person {
    private String numClinicHistory;
    private String sex;
    private String blood;
    private String medicationAllergic;

    public Patient(String numDNI, String name, String lastName, String birthDate, String address, String cityOrigin, String numClinHistory, String sex, String blood, String medicationAllergic ){
        super(numDNI, name, lastName, birthDate, address, cityOrigin);
        this.numClinicHistory = numClinHistory;
        this.sex = sex;
        this.blood = blood;
        this.medicationAllergic = medicationAllergic;
    }

    public Patient(){};

    public Patient getDataPatient(String numDNI){
        if(Maps.patientMap.get(numDNI) == null){
            return new Patient();
        }
        return Maps.patientMap.get(numDNI);
    }

    @Override
    public void printData(){
        super.printData();
        System.out.println("ID Clinic History: " + this.numClinicHistory);
        System.out.println("Sex: " + this.sex);
        System.out.println("Blood: " + this.blood);
        System.out.println("Medication Allergic: " + this.medicationAllergic);

    }


    public void dataRegister(Patient data) {
        Maps.newPatientMap(data);
    }

    public String getNumClinicHistory() {
        return numClinicHistory;
    }
    public void setNumClinicHistory(String numClinicHistory) {
        this.numClinicHistory = numClinicHistory;
    }

    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBlood() {
        return blood;
    }
    public void setBlood(String blood) {
        this.blood = blood;
    }

    public String getMedicationAllergic() {
        return medicationAllergic;
    }
    public void setMedicationAllergic(String medicationAllergic) {
        this.medicationAllergic = medicationAllergic;
    }
}
