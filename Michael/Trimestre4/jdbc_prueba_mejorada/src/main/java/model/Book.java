package model;

public class Book {
    private Long id_book;
    private String title;
    private Long year;
    private Long id_autor;

    public Book(Long id_book, String title, Long year, Long id_autor){
        this.id_book = id_book;
        this.title = title;
        this.year = year;
        this.id_autor = id_autor;
    }

    public Book(String title, Long year, Long id_autor){
        this.title = title;
        this.year = year;
        this.id_autor = id_autor;
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

    public Long getId_autor() {
        return id_autor;
    }

    public void setId_book(Long id_book) {
        this.id_book = id_book;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public void setId_autor(Long id_autor) {
        this.id_autor = id_autor;
    }
}
