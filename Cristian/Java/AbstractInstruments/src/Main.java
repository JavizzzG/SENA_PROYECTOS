public class Main {
    public static void main(String[] args) {
        Instrument guitar = new Guitar("Rope");
        guitar.play();
        guitar.printData();

        Instrument saxophone = new Saxophone("Wind");
        saxophone.play();
        saxophone.printData();

        Instrument violin = new Violin("Rope");
        violin.play();
        violin.printData();
    }
}
