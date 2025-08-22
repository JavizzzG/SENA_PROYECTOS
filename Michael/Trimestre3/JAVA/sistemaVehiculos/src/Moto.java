public class Moto extends Vehiculo {
    public Moto(String nombre, String cantidadLlantas, String placa, String motor, Long potencia) {
        super(nombre, cantidadLlantas, placa, motor, potencia);
        setAceleracion(60L);
    }

    @Override
    public void frenar() {
        if(getVelocidad() - 80 <= 0){
            setVelocidad(0L);
            System.out.println("Ahora la velocidad es de " + getVelocidad());
            return;
        }
        Long velocidadNueva = getVelocidad() - 80;
        setVelocidad(velocidadNueva);
        System.out.println("Ahora la velocidad es de " + getVelocidad());
    }
}
