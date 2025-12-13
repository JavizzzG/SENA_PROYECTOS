package Strategy;

public class PagoTarjeta implements EstrategiaPago{

    @Override
    public void pagar(Long cantidad) {
        System.out.println("Pagando con tarjeta " + cantidad + " pesos");
    }

}
