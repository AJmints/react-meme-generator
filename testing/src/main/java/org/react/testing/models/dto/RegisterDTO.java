package org.react.testing.models.dto;

public class RegisterDTO {
    String email;
    String password;
    String confirmPassword;
    Boolean joinedNewsLetter;

    public RegisterDTO(String email, String password, String confirmPassword, Boolean joinedNewsLetter) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.joinedNewsLetter = joinedNewsLetter;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public Boolean getJoinedNewsLetter() {
        return joinedNewsLetter;
    }
}
