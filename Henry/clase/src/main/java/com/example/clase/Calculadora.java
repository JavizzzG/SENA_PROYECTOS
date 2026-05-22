package com.example.clase;

public class Calculadora {
    private final CalculadoraService servicio;

    public Calculadora(CalculadoraService servicio) {
        this.servicio = servicio;
    }

    public int sumar(int a, int b) {

        return servicio.add(a, b);
    }

    public int restar(int a, int b) {
        return servicio.subtract(a, b);
    }

    public int multiplicar(int a, int b) {
        return servicio.multiply(a, b);
    }

    public int dividir(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("No se puede dividir por cero");
        }
        return servicio.divide(a, b);
    }
}

