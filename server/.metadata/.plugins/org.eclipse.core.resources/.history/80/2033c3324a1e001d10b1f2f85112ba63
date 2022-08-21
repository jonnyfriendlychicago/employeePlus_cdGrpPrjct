package com.jonfriend.springsecuritypoc_v03.validator;


import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import com.jonfriend.springsecuritypoc_v03.models.UserMdl;
@Component
public class UserValidator implements Validator {
    
    //    1
    @Override
    public boolean supports(Class<?> clazz) {
        return UserMdl.class.equals(clazz);
    }
    
    // 2
    @Override
    public void validate(Object object, Errors errors) {
    	UserMdl userMdl = (UserMdl) object;
        
        if (!userMdl.getPasswordConfirmation().equals(userMdl.getPassword())) {
            // 3
            errors.rejectValue("passwordConfirmation", "Match");
        }         
    }
}

