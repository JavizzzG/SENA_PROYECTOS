package FactoryMethod;

abstract public class Transportadora {

    public void enviar() {
        Transporte t = crearTransporte();
        t.viajar();
    }

    public abstract Transporte crearTransporte();

}
