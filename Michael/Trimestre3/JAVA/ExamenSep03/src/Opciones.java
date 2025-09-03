import java.util.Scanner;

public class Opciones {
    public static Inventor opcion1(Scanner scan){
        System.out.print("Nombre: ");
        String nombreInventor = scan.nextLine();
        System.out.print("Edad: ");
        String edadInventor = scan.nextLine();
        System.out.print("Nombre invento: ");
        String nombreInvInventor = scan.nextLine();

        System.out.println("""
                En que categoria compite el inventor
                
                1) Software
                2) Mecanica
                3) Quimica
                
                """);
        String opcionTipoInv = scan.nextLine();
        switch(opcionTipoInv){
            case "1": return new InventorSoftware(nombreInventor, edadInventor, nombreInvInventor);
            case "2": return new InventorMecanica(nombreInventor, edadInventor, nombreInvInventor);
            case "3": return new InventorQuimica(nombreInventor, edadInventor, nombreInvInventor);
            default :
                System.out.println("Error, no se ha creado ningun inventor");
                return null;
        }

    }
}
