public class Human implements GeneralActions, HumanActions{

    @Override
    public void talk() {
        System.out.println("Human is talking");
    }

    @Override
    public void walk() {
        System.out.println("Human is walking");
    }

    @Override
    public void play() {
        System.out.println("Human is playing");
    }

    @Override
    public void sleep() {
        System.out.println("Human is sleeping");
    }

    @Override
    public void eat() {
        System.out.println("Human is eating");
    }

    @Override
    public void dance() {
        System.out.println("Human is dancing");
    }

    @Override
    public void playInstrument() {
        System.out.println("Human is playing an instrument");
    }

    @Override
    public void study() {
        System.out.println("Human is studying");
    }

    @Override
    public void work() {
        System.out.println("Human is working");
    }

}
