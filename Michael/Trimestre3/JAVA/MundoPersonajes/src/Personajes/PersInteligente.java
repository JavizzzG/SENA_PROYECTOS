package Personajes;

public class PersInteligente extends Personaje implements PersonajeInterfaz {
    private String secreto;

    public PersInteligente(String nombre, String mensaje, String habilidad) {
        this.setNombre(nombre);
        this.setMensaje(mensaje);
        this.setHabilidad(habilidad);
        this.secreto = "Piensa en mama clara mucho";
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
