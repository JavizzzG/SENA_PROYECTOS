import java.util.ArrayList;
import java.util.Scanner;

public class Seleccionar {

    static ArrayList<CuentaBancaria> cuentas = new ArrayList<>();

    public static void iniciar(Scanner scan) {
        while (true) {
            System.out.println("""
                    Bienvenidos
                    1) Tengo cuenta (Login)
                    2) Crear Cuenta
                    3) Salir
                    """);
            int opcion = scan.nextInt();
            scan.nextLine(); // limpiar buffer

            switch (opcion) {
                case 1 -> login(scan);
                case 2 -> crearCuenta(scan);
                case 3 -> {
                    System.out.println("Gracias por usar el sistema.");
                    return; // salir del bucle y terminar el programa
                }
                default -> System.out.println("Opción inválida.");
            }
        }
    }

    public static void crearCuenta(Scanner scan) {
        System.out.print("Ingrese nombre del titular: ");
        String titular = scan.nextLine();
        System.out.print("Ingrese número de cuenta: ");
        String numero = scan.nextLine();
        System.out.print("Ingrese saldo inicial: ");
        Long saldo = scan.nextLong();

        CuentaBancaria nueva = new CuentaBancaria(titular, numero, saldo);
        cuentas.add(nueva);

        System.out.println("✅ Cuenta creada con éxito.\n");
    }

    public static void login(Scanner scan) {
        System.out.print("Ingrese número de cuenta: ");
        String numero = scan.nextLine();

        CuentaBancaria cuentaEncontrada = null;
        for (CuentaBancaria cuenta : cuentas) {
            if (cuenta.numeroCuenta.equals(numero)) {
                cuentaEncontrada = cuenta;
                break;
            }
        }

        if (cuentaEncontrada != null) {
            opcion(scan, cuentaEncontrada);
        } else {
            System.out.println("❌ Cuenta no encontrada.");
        }
    }

    public static void opcion(Scanner scan, CuentaBancaria cuenta) {
        while (true) {
            System.out.println("""
                    Seleccione la acción que desea realizar:
                    
                    1) Depositar
                    2) Retirar
                    3) Transferir
                    4) Mostrar Datos
                    5) Volver al menú principal
                    """);
            int opcion = scan.nextInt();

            switch (opcion) {
                case 1 -> {
                    System.out.print("Ingrese cantidad a depositar: ");
                    Long cantidad = scan.nextLong();
                    cuenta.depositar(cantidad);
                }
                case 2 -> {
                    System.out.print("Ingrese cantidad a retirar: ");
                    Long cantidad = scan.nextLong();
                    cuenta.retirar(cantidad);
                }
                case 3 -> {
                    scan.nextLine(); // limpiar buffer
                    System.out.print("Ingrese número de cuenta destino: ");
                    String destinoNum = scan.nextLine();
                    CuentaBancaria destino = null;
                    for (CuentaBancaria c : cuentas) {
                        if (c.numeroCuenta.equals(destinoNum)) {
                            destino = c;
                            break;
                        }
                    }
                    if (destino != null) {
                        System.out.print("Ingrese cantidad a transferir: ");
                        Long cantidad = scan.nextLong();
                        cuenta.transferir(destino, cantidad);
                    } else {
                        System.out.println("❌ Cuenta destino no encontrada.");
                    }
                }
                case 4 -> System.out.println(cuenta.mostrarDatos());
                case 5 -> {
                    return; // volver al menú principal
                }
                default -> System.out.println("Opción inválida.");
            }
        }
    }
}


