public class Car extends Vehicle implements TransportPeople, TransportFreight {


    @Override
    public void movementVehicle(){
        System.out.println("The car is moving at " + super.getMaxSpeed());
    }

    @Override
    public void pickUpPassengers(){
        System.out.println("Picking up passengers in a car");
    };

    @Override
    public void dropOffPassengers(){
        System.out.println("Dropping off passengers in a car");
    }

    @Override
    public void pickUpFreight(){
        System.out.println("Picking freight in a truck");
    }

    @Override
    public void dropOffFreight(){
        System.out.println("Dropping off in a truck");
    }

}
