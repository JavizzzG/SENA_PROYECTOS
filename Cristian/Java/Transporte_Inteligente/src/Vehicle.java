public abstract class Vehicle {
    private String brand;
    private String model;
    private String year;
    private Boolean started;
    private Long maxSpeed;

    public void turnOnVehicle(){
        if(this.getStarted()){
            System.out.println("The Vehicle is already started");
        } else {
            this.setStarted(true);
            System.out.println("Starting the vehicle");
        }
    }

    public void turnOffVehicle(){
        if(this.getStarted()){
            this.setStarted(false);
            System.out.println("Stopping the vehicle");
        } else {
            System.out.println("The Vehicle is already stopped");
        }
    }

    public abstract void movementVehicle();

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Boolean getStarted() {
        return started;
    }

    public void setStarted(Boolean started) {
        this.started = started;
    }

    public Long getMaxSpeed() {
        return maxSpeed;
    }

    public void setMaxSpeed(Long maxSpeed) {
        this.maxSpeed = maxSpeed;
    }
}
