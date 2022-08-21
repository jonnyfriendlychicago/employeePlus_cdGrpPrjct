package com.jonfriend.zemployeeplus_v08.payload;

import com.jonfriend.zemployeeplus_v08.models.UserMdl;

import lombok.Data;

//@Data
public class JwtResponse {
  private String auth_token;
  private String type = "Bearer";
  private UserMdl user;

  public JwtResponse(String accessToken, UserMdl user) {
    this.auth_token = accessToken;
    this.user = user;
  }

  public String getAuth_token() { // odd naming convention to match React requirements
    return auth_token;
  }

  public void setAuth_token(String accessToken) { 
    this.auth_token = accessToken;
  }

public String getType() {
	return type;
}

public void setType(String type) {
	this.type = type;
}

public UserMdl getUser() {
	return user;
}

public void setUser(UserMdl user) {
	this.user = user;
}
  

}