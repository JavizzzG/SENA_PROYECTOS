import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("Ingresa un nuevo vehiculo");
        System.out.println("""
                1) Carro
                2) Moto
                3) Bicicleta
                4) Salir
                """);
        String opcion = scan.nextLine();
        Vehiculo vehiculo;
        switch (opcion) {
            case "1":
                System.out.println("Ingresa la marca");
                String marcaCarro = scan.nextLine();
                System.out.println("Ingresa el modelo");
                String modeloCarro = scan.nextLine();
                System.out.println("Ingresa la velocidad maxima");
                Long vMaxCarro = scan.nextLong();
                Vehiculo carro = new Carro(marcaCarro, modeloCarro, vMaxCarro);
                scan.nextLine(); // Consume the newline character
                System.out.println(carro.toString());
                vehiculo = carro;
                break;
            case "2":
                System.out.println("Ingresa la marca");
                String marcaMoto = scan.nextLine();
                System.out.println("Ingresa el modelo");
                String modeloMoto = scan.nextLine();
                System.out.println("Ingresa la velocidad maxima");
                Long vMaxMoto = scan.nextLong();
                scan.nextLine(); // Consume the newline character
                Vehiculo moto = new Moto(marcaMoto, modeloMoto, vMaxMoto);
                System.out.println(moto.toString());
                vehiculo = moto;
                break;
            case "3":
                System.out.println("Ingresa la marca");
                String marcaBicicleta = scan.nextLine();
                System.out.println("Ingresa el modelo");
                String modeloBicicleta = scan.nextLine();
                System.out.println("Ingresa la velocidad maxima (km/h)");
                Long vMaxBicicleta = scan.nextLong();
                scan.nextLine(); // Consume the newline character
                Vehiculo bicicleta = new Bicicleta(marcaBicicleta, modeloBicicleta, vMaxBicicleta);
                System.out.println(bicicleta.toString());
                vehiculo = bicicleta;
                break;
            case "4":
                System.out.println("Cerrando ...");
                return;
            default:
                System.out.println("Opcion no valida");
                return;
        }

        Boolean activo = true;
        while (activo) {
            System.out.println("Que quieres hacer con el vehiculo");
            System.out.println("""
                    1)Arrancar
                    2)Detener
                    3)Mostrar informaación
                    4)Salir
                    """);
            String opcion2 = scan.nextLine();
            switch (opcion2) {
                case "1":
                    vehiculo.arrancar();
                    break;
                case "2":
                    vehiculo.detener();
                    break;
                case "3":
                    System.out.println(vehiculo.toString());
                    break;
                case "4":
                    activo = false;
                    return;
                default:
                    System.out.println("Opcion no valida");
                    break;
            }
        }
        scan.close();
    }
}
