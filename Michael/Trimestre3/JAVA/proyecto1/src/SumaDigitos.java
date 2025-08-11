import java.util.Scanner;

public class SumaDigitos {
    public static void operar(Scanner scan){

        System.out.println("Introduce un número para sumar sus digitos");
        Long numero = scan.nextLong();
        Long numero_sumado = 0L;

        String[] numeros = (numero.toString()).split("");
        for(String num: numeros){
            numero_sumado += Long.parseLong(num);
        }

        System.out.println("La suma de todos los digitos es " + numero_sumado);
    }
}
