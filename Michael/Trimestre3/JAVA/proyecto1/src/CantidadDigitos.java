import java.util.Scanner;

public class CantidadDigitos {
    public static void operar(Scanner scan){

        System.out.println("Ingrese el número para saber cuantos digitos tiene");
        String numero = scan.next();
        Integer respuesta = numero.length();

        System.out.println("El número " + numero + " tiene " + respuesta + " digitos");
    }
}
