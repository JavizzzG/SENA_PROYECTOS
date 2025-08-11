import java.util.Scanner;

public class OrdenInverso {
    public static void operar(Scanner scan){

        System.out.println("Ingresa un número para invertirlo");
         String numero = scan.next();
         String[] numeros = numero.split("");
         String numeroInvertido = "";
         for(String num: numeros) {
            numeroInvertido = num + numeroInvertido;
         }

        System.out.println("El número " + numero + " invertido es " + numeroInvertido);
    }
}
