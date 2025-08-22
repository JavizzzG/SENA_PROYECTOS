public class Camion extends Vehiculo {
    public Camion(String nombre, String cantidadLlantas, String placa, String motor, Long potencia) {
        super(nombre, cantidadLlantas, placa, motor, potencia);
        setAceleracion(20L);
    }

    @Override
    public void frenar() {
        if(getVelocidad() - 15 <= 0){
            setVelocidad(0L);
            System.out.println("Ahora la velocidad es de " + getVelocidad());
            return;
        }
        Long velocidadNueva = getVelocidad() - 15;
        setVelocidad(velocidadNueva);
        System.out.println("Ahora la velocidad es de " + getVelocidad());
    }
}
