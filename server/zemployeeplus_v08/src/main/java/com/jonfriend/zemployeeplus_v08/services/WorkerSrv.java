package com.jonfriend.zemployeeplus_v08.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jonfriend.zemployeeplus_v08.models.WorkerMdl;
import com.jonfriend.zemployeeplus_v08.repositories.WorkerRpo;


@Service
public class WorkerSrv {
    
    @Autowired
	private WorkerRpo workerRpo;
	
	
	public List<WorkerMdl> all() {
		return this.workerRpo.findAll();
	}
	
	public WorkerMdl create(WorkerMdl workerMdl) {
		
		return this.workerRpo.save(workerMdl);
	}
	
	public WorkerMdl update(WorkerMdl workerMdl) {
		return this.workerRpo.save(workerMdl);
	}
	
	public void delete(Long id) {
		this.workerRpo.deleteById(id);
	}
	
	public WorkerMdl retrieve(Long id) {
		return this.workerRpo.findById(id).get();
	}
	
	
}