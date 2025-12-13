package FactoryMethod;

public class Barco implements Transporte{

    @Override
    public void viajar() {
        System.out.println("Viajando en barco");
        entregar();
    }

    @Override
    public void entregar() {
        System.out.println("Entregando en barco");
    }

}
