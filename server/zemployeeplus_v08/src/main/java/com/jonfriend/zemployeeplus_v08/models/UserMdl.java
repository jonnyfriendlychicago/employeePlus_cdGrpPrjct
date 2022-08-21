package com.jonfriend.zemployeeplus_v08.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

/*
import lombok.Data;
import lombok.NoArgsConstructor;
*/

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.JoinColumn;
import javax.persistence.FetchType;

@Entity
//@NoArgsConstructor
//@Data
@Table(name = "user", uniqueConstraints = { @UniqueConstraint(columnNames = "email") })
public class UserMdl {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 50)
	@Email
	private String email;

	@NotBlank
	@Size(max = 120)
	private String password;
	
	// begin joins
	
	// JRF: cascade...All will delete ALL child records if/when this parent record is whacked
	@OneToMany(mappedBy = "userMdl", cascade = CascadeType.ALL, fetch = FetchType.LAZY) // mappedBy must match attribute in child
	//@JsonIgnore
	private List<WorkerMdl> workerMdl;

	@OneToMany(mappedBy = "userMdl", cascade = CascadeType.ALL, fetch = FetchType.LAZY) // mappedBy must match attribute in child
	//@JsonIgnore
	private List<DivisionMdl> divisionMdl;

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
	//@JsonIgnore
	private Set<RoleMdl> roles = new HashSet<>();

	// end joins
	
//begin: waht is this???
	public UserMdl(String email, String password) {
		this.email = email;
		this.password = password;
	}

	public UserMdl(long id, String email) {
		this.id = id;
		this.email = email;
	}

// end: waht is this???

	// instantiate the mdl -- just added, seems like it's needed???? how does it
	// work without??
	public UserMdl() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<WorkerMdl> getWorkerMdl() {
		return workerMdl;
	}

	public void setWorkerMdl(List<WorkerMdl> workerMdl) {
		this.workerMdl = workerMdl;
	}

	public List<DivisionMdl> getDivisionMdl() {
		return divisionMdl;
	}

	public void setDivisionMdl(List<DivisionMdl> divisionMdl) {
		this.divisionMdl = divisionMdl;
	}

	public Set<RoleMdl> getRoles() {
		return roles;
	}

	public void setRoles(Set<RoleMdl> roles) {
		this.roles = roles;
	}

	// begin getters/setters
	
	
	// end getters/setters
}