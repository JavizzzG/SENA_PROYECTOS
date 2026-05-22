package com.example.clase;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.*;
import org.junit.jupiter.params.provider.ValueSource;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
public class CalculadoraTest {

    @Mock
    private CalculadoraService servicioMock;            // Mock de la interfaz de servicio

    @InjectMocks
    private Calculadora calculadora;                      // Instancia de prueba con mocks inyectados

    @Captor
    private ArgumentCaptor<Integer> captor;               // Para capturar argumentos pasados al mock

    @BeforeEach
    void setUp() {
        // Se crea el objeto a probar con la dependencia mock
        calculadora = new Calculadora(servicioMock);
    }

    @AfterEach
    void tearDown() {
        // (Opcional) acciones de limpieza tras cada prueba
    }

    @Test
    void testSumar_RetornaResultado() {
        when(servicioMock.add(2, 3)).thenReturn(5);

        int resultado = calculadora.sumar(2, 3);

        assertEquals(5, resultado, "La suma debe ser 5");
        // Verificar que se llamó al método add con los argumentos correctos
        verify(servicioMock).add(2, 3);
    }

    @Test
    @DisplayName("Restar algo")
    void testRestar_RetornaResultado() {
        when(servicioMock.subtract(7, 3)).thenReturn(4);
        int res = calculadora.restar(7, 3);
        assertEquals(4, res);
        verify(servicioMock).subtract(7, 3);
    }

    @Test
    void testMultiplicar_CaptorArgumento() {
        when(servicioMock.multiply(3, 5)).thenReturn(15);

        int res = calculadora.multiplicar(3, 5);

        assertEquals(15, res);
        // Capturar el primer argumento pasado a multiply
        verify(servicioMock).multiply(captor.capture(), eq(5));
        assertEquals(3, captor.getValue(), "El primer parámetro debe ser 3");
    }

    @Test
    void testDividirPorCero_LanzaExcepcion() {
        // No necesitamos stub, el método lanza antes de llamar al servicio
        IllegalArgumentException ex = assertThrows(
                IllegalArgumentException.class,
                () -> calculadora.dividir(4, 0),
                "Debe lanzarse IllegalArgumentException al dividir por cero"
        );
        assertTrue(ex.getMessage().contains("cero"));
    }

    @ParameterizedTest
    @ValueSource(ints = { -1, 0, 5 })
    void testValorParametro_Validacion(int valor) {
        // Ejemplo de prueba parametrizada: aceptamos 0 y positivos, pero no negativos
        if (valor < 0) {
            assertThrows(IllegalArgumentException.class, () -> {
                // Simular lógica de excepción por valor inválido
                throw new IllegalArgumentException("Valor negativo");
            });
        } else {
            // Casos no negativos: no lanza excepción
            assertDoesNotThrow(() -> {
                // Ejecución de operación segura
            });
        }
    }

    @Test
    void testSpy_VerificacionParcial() {
        // Ejemplo de spy en una lista
        List<String> listaReal = new ArrayList<>();
        List<String> listaSpy = spy(listaReal);
        listaSpy.add("hola");

        verify(listaSpy).add("hola");
        assertEquals(1, listaSpy.size());
    }
}

