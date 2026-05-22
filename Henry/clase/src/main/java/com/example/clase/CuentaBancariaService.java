package com.example.clase;

public class CuentaBancariaService {

    public Double depositar(double saldo, double monto) {
        return saldo + monto;
    }

    public Double retirar(double saldo, double monto) {
        if (saldo < monto) {
            throw new IllegalArgumentException("Fondos insuficientes");
        }
        return saldo - monto;
    }

}
