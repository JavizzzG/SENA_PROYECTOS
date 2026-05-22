package com.example.clase;

public class CuentaBancaria {

    private CuentaBancariaService servicio;

    public CuentaBancaria(CuentaBancariaService servicio) {
        this.servicio = servicio;
    }

    private double saldo;

    public Double depositar(double monto) {
        saldo = servicio.depositar(saldo, monto);
        return saldo;
    }

    public Double retirar(double monto) {
        saldo = servicio.retirar(saldo, monto);
        return saldo;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }
}
