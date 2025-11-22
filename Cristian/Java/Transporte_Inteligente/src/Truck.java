public class Truck extends Vehicle implements TransportFreight{

    @Override
    public void movementVehicle(){
        System.out.println("The truck is moving at " + super.getMaxSpeed());
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
