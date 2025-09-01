package OpcionesAccion;

import Personajes.PersFuerte;
import Personajes.PersInteligente;
import Personajes.Personaje;

import java.util.Scanner;

public class AccionPersonaje {
    public static void accion(Scanner scan, Personaje personajeActual) {
        Boolean activo = true;
        while(activo) {
            System.out.println("Acciones disponibles:");
            System.out.println("""
                1) Ver mensaje
                2) Cmabiar mensaje
                3) Ver estadisticas
                4) Cambiar estadisticas
                5) Ver habilidad
                6) Cambiar habilidad
                7) Ver secreto
                8) Cambiar secreto
                9) Salir
                """);

            String opcion = scan.nextLine();

            switch(opcion){
                case "1":
                    System.out.println(personajeActual.getMensaje()); break;
                case "2": System.out.println("Escrib a el mensaje: ");
                    personajeActual.setMensaje(scan.nextLine()); break;
                case "3":
                    System.out.println(personajeActual.getNombre());
                    System.out.println(personajeActual.getFuerza());
                    System.out.println(personajeActual.getInteligencia());
                break;
                case "4":
                    System.out.println("Escribe el nombre: ");
                    personajeActual.setNombre(scan.nextLine());
                    System.out.println("Escribe la fuerza: ");
                    personajeActual.setFuerza(scan.nextLong());
                    System.out.println("Escribe la inteligencia: ");
                    personajeActual.setInteligencia(scan.nextLong());
                break;
                case "5": System.out.println(personajeActual.getHabilidad()); break;
                case "6": System.out.println("Escribe la habilidad: ");
                    personajeActual.setHabilidad(scan.nextLine()); break;
                case "7": 
                    if (personajeActual instanceof PersFuerte) {
                        System.out.println(((PersFuerte) personajeActual).getSecreto());
                    } else {
                        System.out.println(((PersInteligente) personajeActual).getSecreto());
                    }
                    break;
                case "8": 
                    if (personajeActual instanceof PersInteligente) {
                        System.out.println("Escribe el secreto: ");
                        ((PersInteligente) personajeActual).setSecreto(scan.nextLine());
                    } else {
                        System.out.println("Escribe el secreto: ");
                        ((PersFuerte) personajeActual).setSecreto(scan.nextLine());
                    }
                    break;
                case "9": activo = false; break;
            }
        }
    }
}
