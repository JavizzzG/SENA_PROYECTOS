package model.dto;

public class BookAutorDTO {
    private Long id_book;
    private String title;
    private Long year;
    private String name_autor;

    public BookAutorDTO(Long id_book, String title, Long year, String name_autor){
        this.id_book = id_book;
        this.title = title;
        this.year = year;
        this.name_autor = name_autor;
    }

    public BookAutorDTO(String title, Long year){
        this.title = title;
        this.year = year;
    }

    public Long getId_book() {
        return id_book;
    }

    public String getTitle() {
        return title;
    }

    public Long getYear() {
        return year;
    }

    public String getName_autor() {
        return name_autor;
    }
}
