package Personajes;

public abstract class Personaje {
    protected String nombre;
    protected Long fuerza;
    protected Long inteligencia;
    protected String habilidad;
    protected String mensaje;

    protected Personaje() {
        this.fuerza = 10L;
        this.inteligencia = 10L;
    }

    public String getNombre(){
        return nombre;
    }

    public void setNombre(String nombre){
        this.nombre = nombre;
    }

    public Long getFuerza(){
        return fuerza;
    }

    public void setFuerza(Long fuerza){
        this.fuerza = fuerza;
    }

    public Long getInteligencia(){
        return inteligencia;
    }

    public void setInteligencia(Long inteligencia){
        this.inteligencia = inteligencia;
    }

    public String getHabilidad(){
        return habilidad;
    }

    public void setHabilidad(String habilidad){
        this.habilidad = habilidad;
    }

    public String getMensaje(){
        return mensaje;
    }

    public void setMensaje(String mensaje){
        this.mensaje = mensaje;
    }

}

interface PersonajeInterfaz {
    String getSecreto();
    void setSecreto(String secreto);
}


