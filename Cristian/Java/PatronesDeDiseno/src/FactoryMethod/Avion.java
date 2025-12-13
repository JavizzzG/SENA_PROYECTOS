package FactoryMethod;

public class Avion implements Transporte{

    @Override
    public void viajar() {
        System.out.println("Viajando en avión");
        entregar();
    }

    @Override
    public void entregar() {
        System.out.println("Entregando en avión");
    }

}
