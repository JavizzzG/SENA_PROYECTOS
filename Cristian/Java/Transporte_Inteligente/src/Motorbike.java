public class Motorbike extends Vehicle implements TransportPeople{

    @Override
    public void movementVehicle(){
        System.out.println("The motorbike is moving at " + super.getMaxSpeed());
    }

    @Override
    public void pickUpPassengers(){
        System.out.println("Picking up passengers in a motorbike");
    };

    @Override
    public void dropOffPassengers(){
        System.out.println("Dropping off passengers in a motorbike");
    }

}
