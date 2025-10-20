package app;

import dao.AutorDAO;
import dao.BookDAO;
import dao.ReportDAO;
import model.Autor;
import model.Book;
import model.dto.BookAutorDTO;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        BookDAO bookDAO = new BookDAO();
        ReportDAO reportDAO = new ReportDAO();
        Autor autor = new Autor("Fajis", "European");


        BookAutorDTO book = new BookAutorDTO("Fast 3", 2008L);
        BookAutorDTO book2 = new BookAutorDTO("Anfry Birds", 1500L);
        BookAutorDTO book3 = new BookAutorDTO("Mama clara", 2005L);

        List<BookAutorDTO> books = new ArrayList<>();
        books.add(book);
        books.add(book2);
        books.add(book3);

        reportDAO.insertAutorAndBooks(autor, books);

        List<BookAutorDTO> ba = reportDAO.selectBooksWithAutorName();
        for (BookAutorDTO a: ba){
            System.out.println("ID: " + a.getId_book() + "\nTitle: " + a.getTitle() + "\nYear: " + a.getYear() + "\nName_autor: " + a.getName_autor());
        }

//        System.out.println(bookDAO.insertBook(book));
//        List<Book> books = bookDAO.selectAllBook();
//        for (Book a: books){
//            System.out.println("ID: " + a.getId_book() + "\nTitle: " + a.getTitle() + "\nYear: " + a.getYear() + "\nId_autor: " + a.getId_autor());
//        }
//        book.setTitle("Don Quijote");
//        book.setYear(1500L);
//        bookDAO.updateBook(book);
//        List<Book> books2 = bookDAO.selectAllBook();
//        for (Book a: books2){
//            System.out.println("ID: " + a.getId_book() + "\nTitle: " + a.getTitle() + "\nYear: " + a.getYear() + "\nId_autor: " + a.getId_autor());
//        }
//        bookDAO.deleteBook(book);
    }
}
