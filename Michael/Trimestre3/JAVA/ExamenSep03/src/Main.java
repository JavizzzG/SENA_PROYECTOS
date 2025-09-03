import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    static ArrayList<Inventor> listaInventores = new ArrayList<Inventor>();
    static ArrayList<Inventor> listaInventoresSoftware = new ArrayList<Inventor>();
    static ArrayList<Inventor> listaInventoresMecanica = new ArrayList<Inventor>();
    static ArrayList<Inventor> listaInventoresQuimica = new ArrayList<Inventor>();
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("Bienvenido");
        Boolean registroActivo = true;
        while(registroActivo){
            System.out.println("""
                    Elige una opcion:
                    
                    1) Nuevo inventor
                    2) Finalizar registro de inventores
                    
                    """);
            String opcion1 = scan.nextLine();
            switch(opcion1){
                case "1": Inventor inventor = Opciones.opcion1(scan);
                    if (inventor != null){
                    listaInventores.add(inventor);
                    }
                    break;
                case "2": registroActivo = false;
                    break;
                default:
                    System.out.println("Opcion no valida");
            }
        }

        if(listaInventores.size() == 0) {
            System.out.println("No se puede empezar sin participantes");
            return;
        }
        System.out.println("Se están realizando las calificaciones de creatividad");
        System.out.println(".");
        System.out.println(".");
        System.out.println(".");
        for(Inventor inv: listaInventores){
            if(inv instanceof InventorSoftware){
                System.out.println("Dale una calificación al invento de " + inv.nombre);
                System.out.println("Nombre invento: " + ((InventorSoftware) inv).invento);
                System.out.println("Presentación:" + ((InventorSoftware) inv).presentar());

                System.out.print("\nCalificacion: ");
                Long calificacionInventor = scan.nextLong();
                scan.nextLine();
                System.out.println("\n\n");
                inv.setCreatividad(calificacionInventor);
                listaInventoresSoftware.add(inv);
            }else if(inv instanceof InventorMecanica){
                System.out.println("Dale una calificación al invento de " + inv.nombre);
                System.out.println("Nombre invento: " + ((InventorMecanica) inv).invento);
                System.out.println("Presentación:" + ((InventorMecanica) inv).presentar());

                System.out.print("\nCalificacion: ");
                Long calificacionInventor = scan.nextLong();
                scan.nextLine();
                System.out.println("\n\n");
                inv.setCreatividad(calificacionInventor);
                listaInventoresMecanica.add(inv);
            } else {
                System.out.println("Dale una calificación al invento de " + inv.nombre);
                System.out.println("Nombre invento: " + ((InventorQuimica) inv).invento);
                System.out.println("Presentación:" + ((InventorQuimica) inv).presentar());

                System.out.print("\nCalificacion: ");
                Long calificacionInventor = scan.nextLong();
                scan.nextLine();
                System.out.println("\n\n");
                inv.setCreatividad(calificacionInventor);
                listaInventoresQuimica.add(inv);
            }
        }
        System.out.println(".");
        System.out.println(".");
        System.out.println("Se han terminado de calificar a los participantes");
        System.out.println("Los participantes por categoria fueron:");
        System.out.println("\nCategoria de Software");
        for(Inventor invG: listaInventoresSoftware){
            System.out.println(invG.nombre);
        }

        System.out.println("\nCategoria de Mecanica");
        for(Inventor invG: listaInventoresMecanica){
            System.out.println(invG.nombre);
        }

        System.out.println("\ncategoria de Quimica");
        for(Inventor invG: listaInventoresQuimica){
            System.out.println(invG.nombre);
        }

        System.out.println("\n\nFin del programa, gracias por su atención");


        scan.close();
    }
}
