import java.util.ArrayList;
import java.util.Scanner;

public class CuentaBancaria {

    String titular;
    String numeroCuenta;
    Long saldo;

    public CuentaBancaria(String titular, String numeroCuenta, Long saldo) {
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
    }

    public String mostrarDatos() {
        return """
                Nombre del titular: """ + titular +
                "\nNumero de Cuenta: " + numeroCuenta +
                "\nSaldo total: " + saldo;
    }

    public void depositar(Long cantidad) {
        if (cantidad > 0) {
            saldo += cantidad;
            System.out.println("Depósito realizado con éxito. Nuevo saldo: " + saldo);
        } else {
            System.out.println("La cantidad a depositar debe ser mayor a 0.");
        }
    }

    public void retirar(Long cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
            System.out.println("Retiro realizado con éxito. Nuevo saldo: " + saldo);
        } else {
            System.out.println("Saldo insuficiente o cantidad inválida.");
        }
    }

    public void transferir(CuentaBancaria destino, Long cantidad) {
        if (cantidad > 0 && cantidad <= saldo) {
            saldo -= cantidad;
            destino.saldo += cantidad;
            System.out.println("Transferencia realizada con éxito.");
        } else {
            System.out.println("Saldo insuficiente o cantidad inválida para transferir.");
        }
    }
}


