public class Saxophone extends Instrument{

    public Saxophone(String type){
        super(type);
    }

    @Override
    public void play() {
        System.out.println("You are playing saxophone");
    }
}
