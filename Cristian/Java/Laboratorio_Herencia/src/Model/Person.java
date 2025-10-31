package Model;

import Utils.Maps;

public class Person {
    private String numDNI;
    private String name;
    private String lastName;
    private String birthDate;
    private String address;
    private String cityOrigin;

    public Person(String numDNI, String name, String lastName, String birthDate, String address, String cityOrigin){
        this.numDNI = numDNI;
        this.name = name;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
        this.cityOrigin = cityOrigin;
    }

    public Person(){};

    public Person getDataPerson(String numDNI){
        if(Maps.personMap.get(numDNI) == null){
            return new Person();
        }
        return Maps.personMap.get(numDNI);
    }

    public void printData(){
        System.out.println("NumDNI: " + this.numDNI);
        System.out.println("Name: " + this.name);
        System.out.println("LastName: " + this.lastName);
        System.out.println("BirthDate: " + this.birthDate);
        System.out.println("Address: " + this.address);
        System.out.println("CityOrigin: " + this.cityOrigin);
    }

    public void dataRegisterPerson(Person data){
        Maps.newPersonMap(data);
    }

    public String getNumDNI() {
        return numDNI;
    }
    public void setNumDNI(String numDNI) {
        this.numDNI = numDNI;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBirthDate() {
        return birthDate;
    }
    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    public String getCityOrigin() {
        return cityOrigin;
    }
    public void setCityOrigin(String cityOrigin) {
        this.cityOrigin = cityOrigin;
    }
}
