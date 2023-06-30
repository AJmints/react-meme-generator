package org.react.testing.controller;

import org.react.testing.models.UserEntity;
import org.react.testing.models.dto.RegisterDTO;
import org.react.testing.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody RegisterDTO registerDTO) {

        UserEntity user = new UserEntity(registerDTO.getEmail(), registerDTO.getPassword(), registerDTO.getJoinedNewsLetter());

        userRepository.save(user);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
