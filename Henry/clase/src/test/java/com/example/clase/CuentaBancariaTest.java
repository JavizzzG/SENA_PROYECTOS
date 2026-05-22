package com.example.clase;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class CuentaBancariaTest {
    @Mock
    private CuentaBancariaService servicioMock;

    @InjectMocks
    private CuentaBancaria cuenta;

    @BeforeEach
    void setUp() {
        cuenta = new CuentaBancaria(servicioMock);
        cuenta.setSaldo(100.0);
    }

    @Test
    void testDepositar_Valido_RetornaSaldo() {
        when(servicioMock.depositar(100.0, 50.0)).thenReturn(150.0);
        double saldo = cuenta.depositar(50.0);
        assertEquals(150.0, saldo);
        verify(servicioMock).depositar(100.0, 50.0);
    }

    @Test
    void testRetirar_Valido_RetornaSaldo() {
        when(servicioMock.retirar(100.0, 50.0)).thenReturn(50.0);
        double saldo = cuenta.retirar(50.0);
        assertEquals(50.0, saldo);
        verify(servicioMock).retirar(100.0, 50.0);
    }

    @Test
    void testRetirar_Invalido_LanzaExcepcion() {
        when(servicioMock.retirar(100.0, 50.0)).thenThrow(new IllegalArgumentException("Fondos insuficientes"));
        assertThrows(IllegalArgumentException.class, () -> {
            cuenta.retirar(50.0);
        });
    }

}
