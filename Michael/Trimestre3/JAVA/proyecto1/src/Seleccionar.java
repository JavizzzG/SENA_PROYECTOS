import java.util.Scanner;

public class Seleccionar {
    public static void opciones(Scanner scan) {
        System.out.println("""
                Elige lo que quieres hacer:
                1) Saber si el número es primo
                2) Mostrar cantidad de digitos de un número
                3) Suma de digitos
                4) Invertir Numeros
                5) Multiplos de 3 entre 1 y N
                6) Número perfecto
                7) Serie de Fibonacci
                8) Frecuencia de números pares e impares
                """);
        Integer opcion = scan.nextInt();

        switch(opcion) {
            case 1:
                NumeroPrimo.operar(scan);
                break;
            case 2:
                CantidadDigitos.operar(scan);
                break;
            case 3:
                SumaDigitos.operar(scan);
                break;
            case 4:
                OrdenInverso.operar(scan);
                break;
            case 5:
                Multiplos3.operar(scan);
                break;
            case 6:
                NumeroPerfecto.operar(scan);
                break;
            case 7:
                SecuenciaFibonacci.operar(scan);
                break;
            case 8:
                CantidadPares.operar(scan);
                break;
            default:
                System.out.println("Proceso finalizado");
        }
    }
}
