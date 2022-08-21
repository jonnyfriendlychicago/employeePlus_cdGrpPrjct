package com.jonfriend.zemployeeplus_v08.controllers;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jonfriend.zemployeeplus_v08.models.DivisionMdl;
import com.jonfriend.zemployeeplus_v08.models.UserMdl;
//import com.jonfriend.playdatenow_v03.models.UserMdl;
//import com.jonfriend.zemployeeplus_v08.models.UserMdl;
import com.jonfriend.zemployeeplus_v08.models.WorkerMdl;
import com.jonfriend.zemployeeplus_v08.services.DivisionSrv;
import com.jonfriend.zemployeeplus_v08.services.UserSrv;
import com.jonfriend.zemployeeplus_v08.services.WorkerSrv;

import java.security.Principal;
import java.util.List;

//import java.security.Principal;
//import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/worker")
public class WorkerCtl {

    @Autowired
    WorkerSrv workerSrv;

    @Autowired
    UserSrv userSrv;
    
    @Autowired
    DivisionSrv divisionSrv;
    
    @PostMapping("/add")
    public ResponseEntity<WorkerMdl> add(
        @Valid @RequestBody WorkerMdl workerMdl,
        BindingResult result, 
        Principal principal
        ) {
            if ( !result.hasErrors() ) {
            	
            	System.out.println("Path: /worker/add");

//            	String authUserEmail = principal.getName(); 
//            	UserMdl authUserObj = userSrv.findByEmail(authUserEmail);
//            	workerMdl.setUserMdl(authUserObj); 
            	//above working to set user_id from the authenticated user, dont' mess it up, Jon! actually, below is a one-line refactoring of above
            	workerMdl.setUserMdl(userSrv.findByEmail(principal.getName()));
            	
            	
//            	Integer divisionIdFromPostman = workerMdl.getDivisionIdTempStor();  
//            	Long divisionIdFromPostmanLong = Long.valueOf(divisionIdFromPostman);  
//            	DivisionMdl targetedDivisionObj = divisionSrv.findById(divisionIdFromPostmanLong);
//            	workerMdl.setDivisionMdl(targetedDivisionObj); 
            	// all of above is setting the division_id in the database by capture/process the id coming from postman; refactored into below. 
//            	workerMdl.setDivisionMdl(divisionSrv.findById(Long.valueOf(workerMdl.getDivisionIdTempStor())));
            	workerMdl.setDivisionMdl(divisionSrv.findById(Long.valueOf(workerMdl.getWorkerDivisionId())));
            	
            	workerMdl.setWorkerDivisionName(workerMdl.getDivisionMdl().getDivisionName()); // took this from the getMap... and holy cow it works
            	
            	return ResponseEntity.status(201).body(this.workerSrv.create(workerMdl));
            }
            return ResponseEntity.status(422).body(null);      
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkerMdl> view(
    		@PathVariable Long id
    		) {
    	
    	WorkerMdl workerObj = this.workerSrv.retrieve(id); 
//    	DivisionMdl workerDivisionObj = workerObj.getDivisionMdl(); 
//    	String workerDivisionName = workerDivisionObj.getDivisionName();     	
//    	workerObj.setWorkerDivisionName(workerDivisionName); 
    	// OMG, above works, and it sends the workerDivisionName to JSON-postman.  Merry Christmas, holy shit.  below is one big code line to encapsulate above
    	workerObj.setWorkerDivisionName(workerObj.getDivisionMdl().getDivisionName());
    	
    	workerObj.setWorkerDivisionId(workerObj.getDivisionMdl().getId().intValue());
    	
//    	return ResponseEntity.status(200).body(this.workerSrv.retrieve(id));
    	return ResponseEntity.status(200).body(workerObj);
    }
    
    @PostMapping("/update")
    public ResponseEntity<WorkerMdl> update(
        @Valid @RequestBody WorkerMdl workerMdl,
        BindingResult result
        ) {

            if ( !result.hasErrors() ) {
            	System.out.println("Path: /worker/update");

            	workerMdl.setDivisionMdl(divisionSrv.findById(Long.valueOf(workerMdl.getWorkerDivisionId())));
                
                workerMdl.setWorkerDivisionName(workerMdl.getDivisionMdl().getDivisionName()); // took this from the getMap... and holy cow it works
//                System.out.println("workerMdl.getDivisionMdl().getDivisionName(): " + workerMdl.getDivisionMdl().getDivisionName());
//                System.out.println("workerMdl.getWorkerDivisionName(): " + workerMdl.getWorkerDivisionName()); 
                
                return ResponseEntity.status(200).body(this.workerSrv.update(workerMdl));
            }
            return ResponseEntity.status(422).body(null);
    }

    @GetMapping("/delete/{id}")
    public ResponseEntity<WorkerMdl> update(
        @PathVariable Long id
        ) {
            this.workerSrv.delete(id);
            return ResponseEntity.status(200).body(null);
    }


//    @GetMapping("/my")
//    public ResponseEntity<List<WorkerMdl>> myTopics(
//        Principal principal
//        ) {
//
//            UserMdl user = userSrv.findByEmail(principal.getName());
//
//            return ResponseEntity.status(200).body(user.getTopics());
//    }
    

  @GetMapping("/all")
  public ResponseEntity<List<WorkerMdl>> getAll(
      ) {
	  return ResponseEntity.status(200).body(this.workerSrv.all());
  }
}