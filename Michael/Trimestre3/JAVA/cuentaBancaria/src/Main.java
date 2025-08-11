import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        Seleccionar.iniciar(scan); // inicia el programa desde el menú principal
        scan.close();
    }
}
