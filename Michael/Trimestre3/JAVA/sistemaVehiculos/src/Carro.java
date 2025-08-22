public class Carro extends Vehiculo {
    public Carro(String nombre, String cantidadLlantas, String placa, String motor, Long potencia) {
        super(nombre, cantidadLlantas, placa, motor, potencia);
        setAceleracion(50L);
    }

    @Override
    public void frenar() {
        if(getVelocidad() - 60 <= 0){
            setVelocidad(0L);
            System.out.println("Ahora la velocidad es de " + getVelocidad());
            return;
        }
        Long velocidadNueva = getVelocidad() - 60;
        setVelocidad(velocidadNueva);
        System.out.println("Ahora la velocidad es de " + getVelocidad());
    }
}