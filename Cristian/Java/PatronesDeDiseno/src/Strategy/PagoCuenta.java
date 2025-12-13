package Strategy;

public class PagoCuenta implements EstrategiaPago{

    @Override
    public void pagar(Long cantidad) {
        System.out.println("Pagando con cuenta " + cantidad + " pesos");
    }

}
