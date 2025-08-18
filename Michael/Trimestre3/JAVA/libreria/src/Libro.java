import java.time.LocalDateTime;

public class Libro {
    String codigo;
    String titulo;
    String autor;
    Boolean disponible;
    LocalDateTime fecha_prestamo;

    public Libro(String codigo, String titulo, String autor, Boolean disponible) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = disponible;
        this.fecha_prestamo = null;
    }

    public String toString() {
        return "Código: " + this.codigo + "\nTítulo: " + this.titulo + "\nAutor: " + this.autor + "\nDisponible: " + this.disponible + "\nFecha Prestamo: " + this.fecha_prestamo;
    }

    public void prestar() {
        disponible = false;
    }

    public void devolver() {
        disponible = true;
        fecha_prestamo = null;
    }

}
