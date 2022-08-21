package com.jonfriend.zemployeeplus_v08.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
//import javax.persistence.JoinColumn; // JRF manually adding
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToMany;
//import javax.persistence.ManyToOne;
//import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
//JRF: keep below OUT when building the autoJoinTbl solution
//import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="worker")
public class WorkerMdl {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
	@Column(updatable=false)
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date updatedAt;

	// begin: entity-specific table fields
//	@NotBlank(message="twinoneName is required.")
	private String firstName;
    
	private String lastName;
	
	private Date hireDate; 
	
	private String jobTitle;
	
	private String workerDescription;
	
	private String employmentType;
	
    
    // end: entity-specific table fields
    
    // start: code for joins
    
    // join user table
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="createdby_id")
	@JsonIgnore
	private UserMdl userMdl;  
    
	// join division
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="division_id")
	@JsonIgnore // IMPORTANTE!!! if this is not here, the workerCreate call will not work, guaranteed.  JSON/Postman can't handle objects.
	private DivisionMdl divisionMdl;  
	
	@Transient 
	private Integer workerDivisionId;
	@Transient 
	private String workerDivisionName;  
	
	// end joins
	
    // instantiate the model: 
    public WorkerMdl() {}
    
    // add methods to populate maintain createdAt/UpdatedAt
    @PrePersist
    protected void onCreate(){
        this.createdAt = new Date();
    }
    @PreUpdate
    protected void onUpdate(){
        this.updatedAt = new Date();
    }
    // begin: getters and setters

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getHireDate() {
		return hireDate;
	}

	public void setHireDate(Date hireDate) {
		this.hireDate = hireDate;
	}

	public String getJobTitle() {
		return jobTitle;
	}

	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}

	public String getWorkerDescription() {
		return workerDescription;
	}

	public void setWorkerDescription(String workerDescription) {
		this.workerDescription = workerDescription;
	}

	public String getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}

	public UserMdl getUserMdl() {
		return userMdl;
	}

	public void setUserMdl(UserMdl userMdl) {
		this.userMdl = userMdl;
	}

	public DivisionMdl getDivisionMdl() {
		return divisionMdl;
	}

	public void setDivisionMdl(DivisionMdl divisionMdl) {
		this.divisionMdl = divisionMdl;
	}
	
//	public Integer getDivisionIdTempStor() {
//		return divisionIdTempStor;
//	}
//
//	public void setDivisionIdTempStor(Integer divisionIdTempStor) {
//		this.divisionIdTempStor = divisionIdTempStor;
//	}

	public String getWorkerDivisionName() {
		return workerDivisionName;
	}

	public void setWorkerDivisionName(String workerDivisionName) {
		this.workerDivisionName = workerDivisionName;
	}

	public Integer getWorkerDivisionId() {
		return workerDivisionId;
	}

	public void setWorkerDivisionId(Integer workerDivisionId) {
		this.workerDivisionId = workerDivisionId;
	}


    // end: getters and setters
// JRF comment proving pull success 2:30pm
// end mdl
}
