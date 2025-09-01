package Personajes;

public class PersFuerte extends Personaje implements PersonajeInterfaz {
    private String secreto;

    public PersFuerte(String nombre, String mensaje, String habilidad) {
        this.setNombre(nombre);
        this.setMensaje(mensaje);
        this.setHabilidad(habilidad);
        this.secreto = "Levanta a mama clara en una mano";
    }

    @Override
    public String getSecreto() {
        return this.secreto;
    }

    @Override
    public void setSecreto(String secreto) {
        this.secreto = secreto;
    }
}
