package FactoryMethod;

public class TransporteMaritimo extends Transportadora{

    @Override
    public Transporte crearTransporte() {
        return new Barco();
    }

}
