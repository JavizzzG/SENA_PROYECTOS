import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Scanner;
import java.time.temporal.ChronoUnit;

public class Seleccionar {
    static ArrayList<Libro> libros = new ArrayList<Libro>();
    static ArrayList<Usuario> usuarios = new ArrayList<Usuario>();
    static ArrayList<String> registro = new ArrayList<String>();
    public static void opciones(Scanner scan) {
        Libro libro1 = new Libro("123", "El señor de los anillos", "JRR Tolkien", true);
        Libro libro2 = new Libro("456", "El hobbit", "JRR Tolkien", true);
        libros.add(libro1);
        libros.add(libro2);
        Usuario usuario1 = new Usuario("123", "Luis");
        usuarios.add(usuario1);
        libro1.fecha_prestamo = LocalDateTime.now();
        usuario1.agregarLibro(libro1);
        libro1.prestar();
        registro.add("El libro " + libro1.titulo + " ha sido prestado al usuario " + usuario1.nombre);
        Boolean activo = true;
        while(activo){
        System.out.println("""
                Selecciona una opción:
                2) Nuevo Libro
                3) Prestar Libro
                4) Devolver Libro
                5) Mostrar Libros Disponibles
                6) Mostrar Usuarios
                7) Mostrar Historial de Prestamos
                8) Salir
                """);
        String opcion = scan.nextLine();
        switch (opcion) {
            case "2" :
                System.out.print("Ingrese el titulo del libro: ");
                String nombre_libro = scan.nextLine();
                System.out.print("Ingrese el autor del libro: ");
                String autor_libro = scan.nextLine();
                System.out.print("Ingrese el código del libro: ");
                String codigo_libro = scan.nextLine();
                Libro nuevoLibro = new Libro(codigo_libro, nombre_libro, autor_libro, true);
                libros.add(nuevoLibro);
                System.out.println("Nuevo libro creado: \n\n" + nuevoLibro.toString());
                break;
            case "3" :
                System.out.println("Ingrese el código del libro que desea prestar: ");
                String codigo_libro_prestar = scan.nextLine();
                Libro libro_usuario = libros.stream().filter(l -> l.codigo.equals(codigo_libro_prestar)).findFirst().orElse(null);
                if (libro_usuario == null){
                    System.out.println("Libro no encontrado.");
                    break;
                }
                System.out.println("Datos del usuario:\n\n");
                System.out.print("Ingrese el documento del usuario: ");
                String documento = scan.nextLine();
                System.out.print("Ingrese el nombre del usuario: ");
                String nombre = scan.nextLine();
                Usuario usuarioEncontrado = usuarios.stream().filter(u -> u.documento.equals(documento)).findFirst().orElse(null);
                if (usuarioEncontrado != null) {
                    if (usuarioEncontrado.usuario_libros.size() >= 3) {
                        System.out.println("El usuario ya tiene 3 libros prestados.");
                        break;
                    }
                    libro_usuario.fecha_prestamo = LocalDateTime.now();
                    usuarioEncontrado.agregarLibro(libro_usuario);
                    libro_usuario.prestar();
                    registro.add("El libro " + libro_usuario.titulo + " ha sido prestado al usuario " + usuarioEncontrado.nombre + " a la hora " + libro_usuario.fecha_prestamo);
                    System.out.println("El libro ha sido prestado al usuario.");
                    break;
                }
                Usuario nuevoUsuario = new Usuario(documento, nombre);
                usuarios.add(nuevoUsuario);
                libro_usuario.fecha_prestamo = LocalDateTime.now();
                nuevoUsuario.agregarLibro(libro_usuario);
                libro_usuario.prestar();
                registro.add("El libro " + libro_usuario.titulo + " ha sido prestado al usuario " + nuevoUsuario.nombre + " a la hora " + libro_usuario.fecha_prestamo + " con fecha limite de devolucion " + libro_usuario.fecha_prestamo + 3);
                System.out.println("El usuario ha sido creado y se le ha prestado el libro.");
                break;
            case "4" :
                System.out.print("Documento de quien devuelve el libro: ");
                String documento_devolucion = scan.nextLine();
                Usuario usuario_devolucion = usuarios.stream().filter(u -> u.documento.equals(documento_devolucion)).findFirst().orElse(null);
                if(usuario_devolucion == null || usuario_devolucion.usuario_libros.size() == 0){
                    System.out.println("Usuario no encontrado o no tiene ningun libro que devolver");
                    break;
                }
                System.out.println("Introduzca el codigo del libro que va a devolver");
                String codigo_devolucion = scan.nextLine();
                Libro libro_devolucion = usuario_devolucion.usuario_libros.stream().filter(l -> l.codigo.equals(codigo_devolucion)).findFirst().orElse(null);
                if(libro_devolucion == null){
                    System.out.println("Libro no encontrado.");
                    break;
                }
                LocalDateTime fecha_devolucion = LocalDateTime.now();
                Long tiempo_prestamo = libro_devolucion.fecha_prestamo.until(fecha_devolucion, ChronoUnit.MINUTES);
                if(tiempo_prestamo > 3){
                    registro.add("El libro " + libro_devolucion.titulo + " ha sido devuelto con retraso. \nTiempo de retraso: " + (tiempo_prestamo - 3) + " minutos. \nMulta de: $" + (tiempo_prestamo - 3) * 500 + "\n Fecha de devolucion: " + fecha_devolucion);
                    System.out.println("El libro "+ libro_devolucion.titulo + " ha sido devuelto con retraso. \nTiempo de retraso: " + (tiempo_prestamo - 3) + " minutos. \nMulta de: $" + (tiempo_prestamo - 3) * 500);
                }
                registro.add("Libro devuelto: " + libro_devolucion.toString() + "\n Fecha de devolucion: " + fecha_devolucion);
                System.out.println("Libro devuelto: " + libro_devolucion.toString());
                libro_devolucion.devolver();
                usuario_devolucion.devolverLibro(libro_devolucion);
                break;
            case "5" :
                System.out.println("Libros disponibles:\n\n");
                String listadoLibros = "";
                for(Libro libro : libros){
                    if(libro.disponible){
                        listadoLibros += libro.toString() + "\n\n";
                    }
                }
                System.out.println(listadoLibros);
                break;
            case "6" :
                System.out.println("Usuarios registrados:\n\n");
                String listadoUsuarios = "";
                for(Usuario usuario : usuarios){
                    listadoUsuarios += usuario.toString() + "\n\n";
                }
                System.out.println(listadoUsuarios);
                break;
            case "7" :
                System.out.println("Registro de prestamos:\n\n");
                String listadoRegistro = "";
                for(String registro : registro){
                    listadoRegistro += registro + "\n\n";
                }
                System.out.println(listadoRegistro);
                break;
            case "8" :
                activo = false;
                System.out.println("Saliendo...");
                break;
            default :System.out.println("Opción no válida.");
            activo = false;

        }
        }
    }
}
