package dao;

import db.ConnectionDB;
import model.Autor;

import javax.swing.plaf.SliderUI;
import javax.xml.transform.Result;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class AutorDAO {
    public Long insertAutor (Autor data){
        String sql = "INSERT INTO autor (name, nationality) VALUES (?, ?)";

        try (
                Connection conn = ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);
                ){

            pstmn.setString(1, data.getName());
            pstmn.setString(2, data.getNationality());

            Integer result = pstmn.executeUpdate();
            if (result == 0){
                System.out.println("Error, no data inserted");
                return null;
            }

            try(ResultSet keys = pstmn.getGeneratedKeys()){

            if(keys.next()){
                System.out.println("Autor inserted correctly");
                data.setId_autor(keys.getLong(1));
                return keys.getLong(1);
            }
            }

            System.out.println("No data was inserted");
            return null;


        } catch (SQLException e){
            e.printStackTrace();
        }

        return null;
    }

    public List<Autor> selectAllAutor(){
        String sql = "SELECT id_autor, name, nationality FROM autor";
        List<Autor> autors = new ArrayList<>();

        try(
                Connection conn = ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql);
                ResultSet result = pstmn.executeQuery();
                ) {

            while (result.next()){
                Long id_autor = result.getLong("id_autor");
                String name = result.getString("name");
                String nationality = result.getString("nationality");

                Autor autor = new Autor(id_autor, name, nationality);
                autors.add(autor);
            }

            System.out.println("All data was selected");
            return autors;


        } catch (SQLException e){
            e.printStackTrace();
        }

        return autors;
    }

    public void updateAutor(Autor data){
        String sql = "UPDATE autor SET name = ?, nationality = ? WHERE id_autor = ?";

        try (
                Connection conn = ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql);
                ){

            pstmn.setString(1, data.getName());
            pstmn.setString(2, data.getNationality());
            pstmn.setLong(3, data.getId_autor());

            Integer result = pstmn.executeUpdate();

            if(result < 1){
                System.out.println("Nothing was afected");
            }

            System.out.println("The update was successfully");

        } catch (SQLException e){
            e.printStackTrace();
        }
    }

    public void deleteAutor (Autor data){
        String sql = "DELETE FROM autor WHERE id_autor = ?";

        try (
                Connection conn = ConnectionDB.getConnection();
                PreparedStatement pstmn = conn.prepareStatement(sql);
                ){

            pstmn.setLong(1, data.getId_autor());

            Integer result = pstmn.executeUpdate();

            if (result < 1){
                System.out.println("The autor wasn't deleted");
            }

            System.out.println("The autor was deleted correctly");

        } catch (SQLException e){
            e.printStackTrace();
        }
    }


}
