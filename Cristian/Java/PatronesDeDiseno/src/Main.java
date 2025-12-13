import FactoryMethod.Transportadora;
import FactoryMethod.TransporteAereo;
import FactoryMethod.TransporteMaritimo;
import FactoryMethod.TransporteTerrenal;
import Strategy.Carrito;
import Strategy.PagoCuenta;
import Strategy.PagoTarjeta;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Transportadora t = new TransporteTerrenal();
        t.enviar();

        t = new TransporteMaritimo();
        t.enviar();

        t = new TransporteAereo();
        t.enviar();

        System.out.println("\n\n\n\n");

        Carrito c = new Carrito();
        c.setEstrategia(new PagoTarjeta());
        c.pagar(6345L);

        c.setEstrategia(new PagoCuenta());
        c.pagar(1234L);
    }
}