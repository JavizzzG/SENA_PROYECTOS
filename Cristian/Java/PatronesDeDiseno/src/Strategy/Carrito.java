package Strategy;

public class Carrito {

    private EstrategiaPago estrategia;

    public void setEstrategia(EstrategiaPago estrategia) {
        this.estrategia = estrategia;
    }

    public void pagar(Long cantidad) {
        estrategia.pagar(cantidad);
    }

}
