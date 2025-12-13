package FactoryMethod;

public class Camion implements Transporte {

    @Override
    public void viajar() {
        System.out.println("Viajando en camión");
        entregar();
    }

    @Override
    public void entregar() {
        System.out.println("Entregando en camión");
    }

}
