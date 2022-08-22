package com.jonfriend.zemployeeplus_v08.repositories;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.jonfriend.zemployeeplus_v08.models.WorkerMdl;


public interface WorkerRpo extends CrudRepository<WorkerMdl, Long> {
    
	@Query(value="SELECT w.first_name, w.last_name, d.division_name FROM worker w join division d on w.division_id = d.id", nativeQuery=true)
	List<WorkerMdl> findAllWorkerPlus();

	List<WorkerMdl> findAll();

}