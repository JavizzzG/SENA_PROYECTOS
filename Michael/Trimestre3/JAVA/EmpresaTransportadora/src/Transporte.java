public abstract class Transporte implements Vehiculo {
    protected String marca;
    protected String modelo;
    protected Long vMax;
    protected String estado;

    public abstract String tipoCombustible();

    public String toString(){
        return "Marca: " + marca + "\n" + "Modelo: " + modelo + "\n" + "Velocidad Maxima: " + vMax + "km/h\n" + "Estado: " + estado + "\n" + "Tipo de Combustible: " + tipoCombustible() + "\n";
    }
}
