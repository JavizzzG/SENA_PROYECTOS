import java.util.Scanner;

public class NumeroPerfecto {
    public static void operar(Scanner scan){

        System.out.println("Ingrese el número para verificar si es perfecto");
        Long num = scan.nextLong();
        Long resultado = 0L;

        for(Long i = 1L; i <= num/2; i++ ){
            if(num % i == 0){
                resultado += i;
            }
        }

        if(resultado == num){
            System.out.println("El número es perfecto");
        }else{
            System.out.println("El número no es perfecto");
        }

    }
}
