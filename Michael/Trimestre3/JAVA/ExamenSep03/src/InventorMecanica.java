public class InventorMecanica extends Inventor {
    protected String invento;

    public InventorMecanica(String nombre, String edad, String invento){
        super.setNombre(nombre);
        super.setEdad(edad);
        this.invento = invento;
    }

    @Override
    protected Long getCreatividad(){
        return creatividad;
    }

    @Override
    protected void setCreatividad(Long creatividad){
        this.creatividad = creatividad;
    }

    protected String presentar(){
        return "El nombre de mi proyecto de Mecanica es: " + invento +"\n Este proyceto llevó horas de trabajo y mucho aceite en las manos";
    }
}
