import java.util.ArrayList;
import java.util.Scanner;

public class Seleccionar {
    static Vehiculo vehiculo = new Vehiculo("General", "3", "jkm123", "2jz", 400L);
    static Moto moto = new Moto("Moto", "2", "mt08", "2jz", 300L);
    static Carro carro = new Carro("Carro", "4", "kmm704", "v4", 600L);
    static Camion camion = new Camion("Camion", "6", "igp838", "v8", 1200L);
    public static void opciones(Scanner scan){
        Boolean activo = true;
        while (activo) {
            System.out.println("Selecciona una opción");
            System.out.println("""
                    1) General
                    2) Carro
                    3) Moto
                    4) Camion
                    5) Salir
                    """);
            String opcion = scan.nextLine();
            switch(opcion) {
                case "1":
                    System.out.println("Selecciona una opción");
                    System.out.println("""
                            1) Acelerar
                            2) Frenar
                            3) Mostrar datos
                            """);
                    String opcion2 = scan.nextLine();
                    if(opcion2.equals("1")){
                        vehiculo.acelerar();
                    }else if(opcion2.equals("2")) {
                        vehiculo.frenar();
                    }else if(opcion2.equals("3")) {
                        System.out.println(vehiculo.toString());
                    }else{
                        System.out.println("Opción no valida");
                    }
                    break;
                case "2":
                    System.out.println("Selecciona una opción");
                    System.out.println("""
                            1) Acelerar
                            2) Frenar
                            3) Mostrar datos
                            """);
                    String opcion3 = scan.nextLine();
                    if(opcion3.equals("1")){
                        carro.acelerar();
                    }else if(opcion3.equals("2")) {
                        carro.frenar();
                    }else if(opcion3.equals("3")) {
                        System.out.println(carro.toString());
                    }else{
                        System.out.println("Opción no valida");
                    }
                    break;
                case "3":
                    System.out.println("Selecciona una opción");
                    System.out.println("""
                            1) Acelerar
                            2) Frenar
                            3) Mostrar datos
                            """);
                    String opcion4 = scan.nextLine();
                    if(opcion4.equals("1")){
                        moto.acelerar();
                    }else if(opcion4.equals("2")) {
                        moto.frenar();
                    }else if(opcion4.equals("3")) {
                        System.out.println(moto.toString());
                    }else{
                        System.out.println("Opción no valida");
                    }
                    break;
                case "4":
                    System.out.println("Selecciona una opción");
                    System.out.println("""
                            1) Acelerar
                            2) Frenar
                            3) Mostrar datos
                            """);
                    String opcion5 = scan.nextLine();
                    if(opcion5.equals("1")){
                        camion.acelerar();
                    }else if(opcion5.equals("2")) {
                        camion.frenar();
                    }else if(opcion5.equals("3")) {
                        System.out.println(camion.toString());
                    }else{
                        System.out.println("Opción no valida");
                    }
                    break;
                    case "5":
                    activo = false;
                        System.out.println("Saliendo del programa...");
                        break;
                default:
                    System.out.println("Opción no valida");
            }
        }
    }
}
