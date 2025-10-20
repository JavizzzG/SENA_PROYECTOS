package dao;

import db.ConnectionDB;
import model.Autor;
import model.Book;
import model.dto.BookAutorDTO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ReportDAO {
    public List<BookAutorDTO> selectBooksWithAutorName(){
        String sql = "SELECT b.id_book, b.title, b.year, a.name AS name_autor FROM book b JOIN autor a ON a.id_autor = b.id_autor";

        List<BookAutorDTO> books = new ArrayList<>();

        try (
                Connection conn = ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql);
                ResultSet res = pstmn.executeQuery();
                ){

            while (res.next()){
                Long id_book = res.getLong("id_book");
                String title = res.getString("title");
                Long year = res.getLong("year");
                String name_autor = res.getString("name_autor");

                BookAutorDTO book = new BookAutorDTO(id_book, title, year, name_autor);
                books.add(book);
            }

            if (books.isEmpty()){
                System.out.println("No books in the system");
            }

            return books;

        } catch (SQLException e){
            e.printStackTrace();
        }
        return null;
    }

    public void insertAutorAndBooks(Autor autor, List<BookAutorDTO> books){
        String sqlAutor = "INSERT INTO autor (name, nationality) VALUES (?, ?)";
        String sqlBook = "INSERT INTO book (title, year, id_autor) VALUES (?, ?, ?)";

        Connection conn = null;
        try {
            conn = ConnectionDB.getConnection();
            conn.setAutoCommit(false);
            try(
                    PreparedStatement pstmnAutor = conn.prepareStatement(sqlAutor, Statement.RETURN_GENERATED_KEYS);
                    PreparedStatement pstmnBook = conn.prepareStatement(sqlBook, Statement.RETURN_GENERATED_KEYS);
                    ){

                pstmnAutor.setString(1, autor.getName());
                pstmnAutor.setString(2, autor.getNationality());
                Integer autorRows = pstmnAutor.executeUpdate();

                if (autorRows < 1){
                    System.out.println("The autor wasn't inserted");
                    conn.rollback();
                    conn.close();
                }

                try (ResultSet keyAutor = pstmnAutor.getGeneratedKeys()){
                    if (keyAutor.next()){
                        for (BookAutorDTO b: books){
                            pstmnBook.setString(1, b.getTitle());
                            pstmnBook.setLong(2, b.getYear());
                            pstmnBook.setLong(3, keyAutor.getLong(1));

                            pstmnBook.addBatch();
                        }
                    }
                }

                pstmnBook.executeBatch();
                conn.commit();
                System.out.println("All data inserted correctly");

            }

        } catch (SQLException e){
            if (conn != null){
                try {
                    conn.rollback();
                    System.out.println("Rollback successfully");
                } catch (SQLException er){
                    er.printStackTrace();
                }
            }
        } finally {
            if (conn != null){
                try {
                    conn.close();
                } catch (SQLException err){
                    System.out.println("Error trying to close the connection");
                    err.printStackTrace();
                }
            }
        }
    }
}
