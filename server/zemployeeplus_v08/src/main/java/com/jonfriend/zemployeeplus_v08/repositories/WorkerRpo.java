package com.jonfriend.zemployeeplus_v08.repositories;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.jonfriend.zemployeeplus_v08.models.WorkerMdl;


public interface WorkerRpo extends CrudRepository<WorkerMdl, Long> {
    
    List<WorkerMdl> findAll();
}