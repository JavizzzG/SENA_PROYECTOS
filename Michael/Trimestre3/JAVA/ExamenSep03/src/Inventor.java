public abstract class Inventor {
    protected String nombre;
    protected String edad;
    protected Long creatividad;

    protected String getNombre(){
        return nombre;
    }

    protected void setNombre(String nombre){
        this.nombre = nombre;
    }

    protected String getEdad(){
        return edad;
    }

    protected void setEdad(String edad){
        this.edad = edad;
    }

    abstract Long getCreatividad();

    abstract void setCreatividad(Long creatividad);
}
