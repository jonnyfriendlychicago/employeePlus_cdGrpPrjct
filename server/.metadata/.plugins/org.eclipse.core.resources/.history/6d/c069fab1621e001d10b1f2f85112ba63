package com.jonfriend.springsecuritypoc_v03.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.jonfriend.springsecuritypoc_v03.models.RoleMdl;

@Repository
public interface RoleRpo extends CrudRepository<RoleMdl, Long> {

	List<RoleMdl> findAll();
    
    List<RoleMdl> findByName(String name);
}