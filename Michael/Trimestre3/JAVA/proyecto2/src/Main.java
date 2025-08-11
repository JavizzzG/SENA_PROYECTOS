import java.util.Scanner;

public class Main {
    public static void main(String[] args){
        Personaje ironman = new Personaje("Ironman", "Plata", true, true, 100, 90, 0);
        Personaje spiderman = new Personaje("Spiderman", "Sentido aracnido", true, true, 100, 80, 0);
        Personaje doctor_strange = new Personaje("Doctor Strange", "Magia", true, true, 100, 70, 50);

        Object[] array = {ironman, spiderman, doctor_strange};
        Scanner scan = new Scanner(System.in);

        System.out.println("""
                Deseas atacar o curar
                
                1) atacar
                2) curar
                """);
        Integer opcion0 = scan.nextInt();
        switch (opcion0) {
            case 1:
                System.out.println("""
                        Elige a quien deseas atacar
                        
                        1)Ironman
                        2)Spiderman
                        3)Doctor_Strange
                        
                        """);

                Integer opcion1 = scan.nextInt();
                if (opcion1 > 0 && opcion1 <= array.length) {
                    Personaje p1 = (Personaje) array[opcion1 - 1];
                    System.out.println("Seleccionaste a " + p1);
                    System.out.println("Ahora elige quien ataca");
                    Integer opcion2 = scan.nextInt();
                    if (opcion2 > 0 && opcion2 <= array.length && opcion2 != opcion1) {
                        Personaje p2 = (Personaje) array[opcion2 - 1];
                        System.out.println("Seleccionaste a " + p2);
                        p1.recibirAtaque(p2.ataque);
                        p1.mostrarPersonaje();
                        p2.mostrarPersonaje();
                    } else {
                        System.out.println("Personaje no encontrado");
                    }
                } else {
                    System.out.println("personaje no encontrado");
                }
            break;
            case 2:
                System.out.println("""
                        Elige a quien deseas curar
                        
                        1)Ironman
                        2)Spiderman
                        3)Doctor_Strange
                        
                        """);

                Integer opcion3 = scan.nextInt();
                if (opcion3 > 0 && opcion3 <= array.length) {
                    Personaje p3 = (Personaje) array[opcion3 - 1];
                    System.out.println("Seleccionaste a " + p3);
                    System.out.println("Ahora elige quien cura");
                    Integer opcion4 = scan.nextInt();
                    if (opcion4 > 0 && opcion4 <= array.length && opcion4 != opcion3) {
                        Personaje p4 = (Personaje) array[opcion4 - 1];
                        System.out.println("Seleccionaste a " + p4);
                        p3.recibirCura(p4.cura);
                        p3.mostrarPersonaje();
                        p4.mostrarPersonaje();
                    } else {
                        System.out.println("Personaje no encontrado");
                    }
                } else {
                    System.out.println("personaje no encontrado");
                }
                break;
            default:
                System.out.println("Cancelado");
                break;
        }
    }
}
