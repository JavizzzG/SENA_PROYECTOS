import java.util.ArrayList;

public class Usuario {
    String documento;
    String nombre;
    ArrayList<Libro> usuario_libros = new ArrayList<Libro>();

    public Usuario(String documento, String nombre) {
        this.documento = documento;
        this.nombre = nombre;
    }

    public String toString() {
        return "Documento: " + this.documento + "\nNombre: " + this.nombre + "\nLibros: " + this.usuario_libros;
    }

    public void agregarLibro(Libro libro) {
        usuario_libros.add(libro);
    }

    public void devolverLibro(Libro libro) {
        usuario_libros.remove(libro);
    }

}
