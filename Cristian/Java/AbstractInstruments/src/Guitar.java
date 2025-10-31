public class Guitar extends Instrument {

    public Guitar(String type ){
        super(type);
    }

    @Override
    public void play() {
        System.out.println("You are playing guitar");
    }

}
