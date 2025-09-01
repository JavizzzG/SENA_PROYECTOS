import OpcionesAccion.AccionPersonaje;
import OpcionesCreacion.CrearPersonaje;
import Personajes.Personaje;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        Personaje personaje = CrearPersonaje.elegir(scan);
        if(personaje == null){
            System.out.println("Opción no válida");
            return;
        }
        AccionPersonaje.accion(scan, personaje);

    }
}
