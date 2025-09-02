public class Moto extends Transporte {
    public Moto(String marca, String modelo, Long vMax) {
        this.marca = marca;
        this.modelo = modelo;
        this.vMax = vMax;
        this.detener();
    }

    @Override
    public String tipoCombustible(){
        return "Gasolina";
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
