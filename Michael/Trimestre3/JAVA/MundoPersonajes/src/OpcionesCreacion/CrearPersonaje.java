package OpcionesCreacion;

import Personajes.PersFuerte;
import Personajes.PersInteligente;
import Personajes.Personaje;

import java.util.Scanner;

public class CrearPersonaje {
    public static Personaje elegir(Scanner scan){
        System.out.println("Elige un personaje");
        System.out.println("""
                1) Fuerte
                2) Inteligente
                
                """);
        String opcionPersonaje = scan.nextLine();
        Personaje crearPersonaje;
        switch(opcionPersonaje) {
            case "1": crearPersonaje = new PersFuerte("Fajis", "Soy Negro", "Ser gay");
                return crearPersonaje;
            case "2": crearPersonaje = new PersInteligente("Eusebio", "Soy el mejor", "Ser el papá de todos");
                return crearPersonaje;
            default: return null;
        }
    }
}
