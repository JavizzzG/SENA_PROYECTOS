package FactoryMethod;

public class TransporteTerrenal extends Transportadora{

    @Override
    public Transporte crearTransporte() {
        return new Camion();
    }

}
