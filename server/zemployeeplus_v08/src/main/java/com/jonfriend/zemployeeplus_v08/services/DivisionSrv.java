package com.jonfriend.zemployeeplus_v08.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jonfriend.zemployeeplus_v08.models.DivisionMdl;
import com.jonfriend.zemployeeplus_v08.repositories.DivisionRpo;

@Service
public class DivisionSrv {

	@Autowired
	private DivisionRpo divisionRpo;
	
	
	public List<DivisionMdl> all() {
		return this.divisionRpo.findAll();
	}
	
	public DivisionMdl create(DivisionMdl divisionMdl) {
		
		return this.divisionRpo.save(divisionMdl);
	}
	
	public void delete(Long id) {
		this.divisionRpo.deleteById(id);
	}
	
	public DivisionMdl retrieve(Long id) {
		return this.divisionRpo.findById(id).get();
	}
	
	
	// BP'ed from playdateSrv
	
	// returns one playdate by id 
	public DivisionMdl findById(Long id) {
		Optional<DivisionMdl> optionalSoughtItem = divisionRpo.findById(id);
		if(optionalSoughtItem.isPresent()) {
			return optionalSoughtItem.get();
		}else {
			return null;
		}
	}
	
	
	
	public DivisionMdl update(DivisionMdl divisionMdl) {
		return this.divisionRpo.save(divisionMdl);
	}
}