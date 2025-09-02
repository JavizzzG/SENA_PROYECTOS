public class Bicicleta extends Transporte {
    public Bicicleta(String marca, String modelo, Long vMax) {
        this.marca = marca;
        this.modelo = modelo;
        this.vMax = vMax;
        this.detener();
    }

    @Override
    public String tipoCombustible(){
        return "No usa combustible";
    }

    @Override
    public void arrancar(){
        estado = "En movimiento";
    }

    @Override
    public void detener(){
        estado = "Detenido";
    }
}
