package me.designdevelop.authservice.service;

import me.designdevelop.authservice.entity.User;
import me.designdevelop.authservice.repository.UserRepository;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    public void  registerUser(){
        // to register a user via email or phone number and send a confirmation email or message.
    }

    public void  confirmUser(){
        //  confirmUser: to confirm a user's email or phone number.
    }

    public void  deleteUser(){

    }

    public void  updateUser(){

    }

    public void  findByEmail(){

    }

    public void  findByPhone(){

    }

    public void  findByGoogleId(){

    }

    public void  saveUser(){
        //save: to save the user to the MongoDB database.
    }
}
