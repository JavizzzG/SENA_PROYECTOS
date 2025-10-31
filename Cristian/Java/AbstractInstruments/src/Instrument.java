public abstract class Instrument {

    private String type;

    public Instrument(String type){
        this.type = type;
    };

    abstract void play();

    public void printData(){
        System.out.println("Type: " + this.type);
        this.play();
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
