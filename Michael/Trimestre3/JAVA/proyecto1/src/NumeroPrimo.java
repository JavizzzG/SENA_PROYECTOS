import java.util.Scanner;

public class NumeroPrimo {
    public static void operar(Scanner scan){

        System.out.println("Ingrese un número para comprobar si es primo");
        Long numero = scan.nextLong();

        if(numero == 1){
            System.out.println("No es primo");
            return;
        }

        if(numero == 2) {
            System.out.println("Es primo");
            return;
        }

        if(numero % 2 == 0) {
            System.out.println("No es primo");
            return;
        }

        for(Long i = 1L; i <= numero/2; i += 2){
            if(numero % i == 0 && i != 1){
                System.out.println("No es primo");
                return;
            }
        }

        System.out.println("Es primo");
    }
}
