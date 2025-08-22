public class Vehiculo {
    private String cantidadLlantas;
    private String placa;
    private String motor;
    private Long potencia;
    private String nombre;
    private Long velocidad;
    private Long aceleracion;

    public Vehiculo(String nombre, String cantidadLlantas, String placa, String motor, Long potencia) {
        this.nombre = nombre;
        this.cantidadLlantas = cantidadLlantas;
        this.placa = placa;
        this.motor = motor;
        this.potencia = potencia;
        this.velocidad = 0L;
        this.aceleracion = 40L;
    }

    public String toString() {
        return nombre + ":" +
                "cantidadLlantas='" + cantidadLlantas + '\'' +
                ", placa='" + placa + '\'' +
                ", motor='" + motor + '\'' +
                ", potencia='" + potencia + '\'' +
                ", velocidad='" + velocidad + '\'' +
                ", aceleracion='" + aceleracion + '\'';
    }

    public void acelerar(){
        if(velocidad > (potencia/5)*2){
            System.out.println("El vehiculo llego a su velocidad maxima");
            return;
        }
        velocidad += aceleracion;
        System.out.println("Ahora la velocidad es de " + velocidad);
    }

    public void frenar(){
        if(velocidad - 50 <= 0){
            velocidad = 0L;
            System.out.println("Ahora la velocidad es de " + velocidad);
            return;
        }

        velocidad -= 50;
        System.out.println("Ahora la velocidad es de " + velocidad);
    }

    protected Long getVelocidad() {
        return velocidad;
    }

    protected void setVelocidad(Long velocidad) {
        this.velocidad = velocidad;
    }

    protected Long getAceleracion() {
        return aceleracion;
    }

    protected void setAceleracion(Long aceleracion) {
        this.aceleracion = aceleracion;
    }
}
