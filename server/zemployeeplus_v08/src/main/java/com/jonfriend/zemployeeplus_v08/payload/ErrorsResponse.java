package com.jonfriend.zemployeeplus_v08.payload;

import java.util.List;

import lombok.Data;

@Data
public class ErrorsResponse {
    
    private List<String> errors;

    public ErrorsResponse(List<String> errors) {
        this.errors = errors;
    }
}