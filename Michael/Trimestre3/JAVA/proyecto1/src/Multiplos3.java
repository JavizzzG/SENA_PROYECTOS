import java.util.Scanner;

public class Multiplos3 {
    public static void operar(Scanner scan){

        System.out.println("Ingresa el número N hasta el que se veran los multiplos de 3");
        Integer numero = scan.nextInt();

        for(Integer i = 0; i <= numero; i += 3){
            if (i == 0){
                System.out.println(1);
            }else{
                System.out.println(i);
            }
        }
    }
}
