import java.util.Scanner;

public class SecuenciaFibonacci {
    public static void operar(Scanner scan){

        System.out.println("Cuantas veces quieres que se repita la secuencia de Fibonacci?");
        Long numero = scan.nextLong();

        Long n1 = 0L;
        Long n2 = 1L;

        for(Integer i = 1; i <= numero ; i++){
            System.out.println(n2);
            Long n3 = n1;
            n1 = n2;
            n2 = n3+n2;
        }
    }
}
