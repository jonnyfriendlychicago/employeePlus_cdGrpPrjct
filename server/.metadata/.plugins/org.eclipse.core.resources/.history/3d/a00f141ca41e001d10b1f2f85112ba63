package com.jonfriend.springsecuritypoc_v04testBP.validator;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import com.jonfriend.springsecuritypoc_v04testBP.models.UserMdl;

@Component
public class UserValidator implements Validator {
    

    @Override
    public boolean supports(Class<?> clazz) {
        return UserMdl.class.equals(clazz);
    }
    
    @Override
    public void validate(Object object, Errors errors) {
    	UserMdl userMdl = (UserMdl) object;
        
        if (!userMdl.getPasswordConfirm().equals(userMdl.getPassword())) {
            errors.rejectValue("passwordConfirm", "Match");
        }         
    }

// end validator class
}

