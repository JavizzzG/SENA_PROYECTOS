public class Personaje {
    String nombre;
    String poder;
    Boolean arma;
    Boolean bueno;
    Integer vida;
    Integer ataque;
    Integer cura;

    public Personaje(String nombre, String poder, Boolean arma, Boolean bueno, Integer vida, Integer ataque, Integer cura) {
        this.nombre = nombre;
        this.poder = poder;
        this.arma = arma;
        this.bueno = bueno;
        this.vida = vida;
        this.ataque = ataque;
        this.cura = cura;
    }

    public void mostrarPersonaje(){
        System.out.println("El nombre es: " + nombre);
        System.out.println("El poder es: " + poder);
        System.out.println("El arma es: " + arma);
        System.out.println("El bueno es: " + bueno);
        System.out.println("El vida es: " + vida);
        System.out.println("El ataque es: " + ataque);
        System.out.println("La cura es: " + cura);
    }

    public Integer atacar(){
        return ataque;
    }

    public void recibirAtaque(Integer valor){
        vida -= valor;
    }

    public Integer curar() {
        return cura;
    }

    public void recibirCura(Integer valor) {
        vida += valor;
    }
}

