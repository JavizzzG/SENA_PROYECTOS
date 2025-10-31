public class Violin extends Instrument{

    public Violin(String type){
        super(type);
    }

    @Override
    public void play() {
        System.out.println("You are playing violin");
    }

}
