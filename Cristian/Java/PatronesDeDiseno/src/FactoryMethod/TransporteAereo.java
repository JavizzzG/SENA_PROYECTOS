package FactoryMethod;

public class TransporteAereo extends Transportadora{

    @Override
    public Transporte crearTransporte() {
        return new Avion();
    }

}
