package dao;

import db.ConnectionDB;
import model.Book;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class BookDAO {
    public Long insertBook(Book data){
        String sql = "INSERT INTO book (title, year, id_autor) VALUES (?, ?, ?)";

        try (
                Connection conn = ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
                ){

            pstmn.setString(1, data.getTitle());
            pstmn.setLong(2, data.getYear());
            pstmn.setLong(3, data.getId_autor());

            Integer result = pstmn.executeUpdate();
            try(ResultSet r = pstmn.getGeneratedKeys()){
                if(r.next()){
                    Long key = r.getLong(1);
                    data.setId_book(key);
                    System.out.println("The insert was executed correctly");
                    return key;
                }
            }

            System.out.println("No data inserted");
            return null;

        } catch (SQLException e){
            e.printStackTrace();
        }
        return null;
    }

    public List<Long> insertBatchBook(List<Book> data){
        String sql = "INSERT INTO book (title, year, id_autor) VALUES (?, ?, ?)";
        Connection conn = null;

            try {
                conn = ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                    conn.setAutoCommit(false);
                for (Book b: data){
                    pstmn.setString(1, b.getTitle());
                    pstmn.setLong(2, b.getYear());
                    pstmn.setLong(3, b.getId_autor());

                    pstmn.addBatch();
                }

                int[] results = pstmn.executeBatch();
                conn.commit();

                if (results.length < 1){
                    System.out.println("No data inserted");
                    conn.rollback();
                    conn.close();
                    return null;
                }

                try (ResultSet r = pstmn.getGeneratedKeys()){
                    List<Long> keys = new ArrayList<>();
                    while (r.next()){
                        keys.add(r.getLong(1));
                    }
                    return keys;
                }

        } catch (SQLException e){
        if (conn != null){
            try {
                conn.rollback();
                System.out.println("Data rollback");
            }catch (SQLException er){
                er.printStackTrace();
            }
        }
        } finally {
            if (conn != null){
                try {
                    conn.close();
                } catch (SQLException err){
                    System.out.println("Error when connections was closing");
                    err.printStackTrace();
                }
            }

        }
        return null;
    }

    public List<Book> selectAllBook(){
        String sql = "SELECT id_book, title, year, id_autor FROM book";

        List<Book> books = new ArrayList<>();

        try (
                Connection conn =  ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql);
                ResultSet res = pstmn.executeQuery();
                ){

            while (res.next()){
                Long id_book = res.getLong("id_book");
                String title = res.getString("title");
                Long year = res.getLong("year");
                Long id_autor = res.getLong("id_autor");

                Book book = new Book(id_book, title, year, id_autor);
                books.add(book);
            }

            if (books.isEmpty()){
                System.out.println("System don't have books currently");
            }

            return books;

        } catch (SQLException e){
            e.printStackTrace();
        }

        return null;
    }

    public void updateBook(Book data){
        String sql = """
                UPDATE book SET
                title = ?,
                year = ?,
                id_autor = ?
                WHERE id_book = ?
                """;

        try (
                Connection conn =  ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql);
                ){

            pstmn.setString(1, data.getTitle());
            pstmn.setLong(2, data.getYear());
            pstmn.setLong(3, data.getId_autor());
            pstmn.setLong(4, data.getId_book());

            Integer result = pstmn.executeUpdate();

            if (result < 1){
                System.out.println("No rows was affected");
            }

            System.out.println("Updated correctly");

        } catch (SQLException e){
            e.printStackTrace();
        }
    }

    public void deleteBook(Book data){
        String sql = "DELETE FROM book WHERE id_book = ?";

        try (
                Connection conn = ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql)
                ){

            pstmn.setLong(1, data.getId_book());

            Integer result = pstmn.executeUpdate();

            if (result < 1){
                System.out.println("No rows was affected");
            }

            System.out.println("Deleted correctly");

        } catch (SQLException e){
            e.printStackTrace();
        }
    }
}
