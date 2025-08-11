import java.util.Scanner;

public class CantidadPares {
    public static void operar(Scanner scan) {

        System.out.println("Introduce diez digitos apra saber sin son pares o impares");
        System.out.print("1) ");
        Long num1 = scan.nextLong();
        System.out.print("2) ");
        Long num2 = scan.nextLong();
        System.out.print("3) ");
        Long num3 = scan.nextLong();
        System.out.print("4) ");
        Long num4 = scan.nextLong();
        System.out.print("5) ");
        Long num5 = scan.nextLong();
        System.out.print("6) ");
        Long num6 = scan.nextLong();
        System.out.print("7) ");
        Long num7 = scan.nextLong();
        System.out.print("8) ");
        Long num8 = scan.nextLong();
        System.out.print("9) ");
        Long num9 = scan.nextLong();
        System.out.print("10) ");
        Long num10 = scan.nextLong();

        Long[] array = {num1, num2, num3, num4, num5, num6, num7, num8, num9, num10};

        String pares = ": ";
        String impares = ": ";

        for(Long n: array){
            if(n % 2 == 0){
                pares += n + ", ";
            }else{
                impares += n + ", ";
            }
        }

        System.out.println("Los pares son" + pares);
        System.out.println("");
        System.out.println("Los impares son" + impares);
    }
}
