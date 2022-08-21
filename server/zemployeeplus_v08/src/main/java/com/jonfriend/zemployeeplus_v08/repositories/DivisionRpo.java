package com.jonfriend.zemployeeplus_v08.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.jonfriend.zemployeeplus_v08.models.DivisionMdl;


public interface DivisionRpo extends CrudRepository<DivisionMdl, Long> {
    
    List<DivisionMdl> findAll();
}