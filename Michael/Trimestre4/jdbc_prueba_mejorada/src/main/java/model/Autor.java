package model;

public class Autor {
    private Long id_autor;
    private String name;
    private String nationality;

    public Autor(Long id_autor, String name, String nationality){
        this.id_autor = id_autor;
        this.name = name;
        this.nationality = nationality;
    }

    public Autor(String name, String nationality){
        this.name = name;
        this.nationality = nationality;
    }

    public Long getId_autor() {
        return id_autor;
    }

    public String getName() {
        return name;
    }

    public String getNationality() {
        return nationality;
    }

    public void setId_autor(Long id_autor) {
        this.id_autor = id_autor;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
}
