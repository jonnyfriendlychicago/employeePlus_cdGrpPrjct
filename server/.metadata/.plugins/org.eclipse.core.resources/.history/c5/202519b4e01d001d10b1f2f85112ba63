package com.jonfriend.springsecuritypoc_v03.services;

import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.jonfriend.springsecuritypoc_v03.models.RoleMdl;
import com.jonfriend.springsecuritypoc_v03.models.UserMdl;
import com.jonfriend.springsecuritypoc_v03.repositories.UserRpo;


@Service
public class UserDetailsServiceImplementation implements UserDetailsService {

	
	private UserRpo userRpo;
    
    public UserDetailsServiceImplementation(UserRpo userRpo){
        this.userRpo = userRpo;
    }
    
    // 1
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserMdl userMdl = userRpo.findByUsername(username);
        
        if(userMdl == null) {
            throw new UsernameNotFoundException("User not found");
        }
        
        return new org.springframework.security.core.userdetails.User(userMdl.getUsername(), userMdl.getPassword(), getAuthorities(userMdl));
    }
    
    // 2
    private List<GrantedAuthority> getAuthorities(UserMdl userMdl){
        List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        for(RoleMdl role : userMdl.getRoleMdl()) {
            GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(role.getName());
            authorities.add(grantedAuthority);
        }
        return authorities;
    }
    
    
}
