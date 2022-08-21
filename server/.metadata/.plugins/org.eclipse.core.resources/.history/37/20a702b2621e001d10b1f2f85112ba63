<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>springsecuritypoc_v03 - Registration Page</title>
</head>

<body>
    <h1>Register here, baby</h1>
    
    <p><form:errors path="user.*"/></p>
    
    <form:form method="POST" action="/register" modelAttribute="user">
        <p>
            <form:label path="firstName">firstName:</form:label>
            <form:input path="firstName"/>
            <form:errors path="firstName" class="text-danger"/>
        </p>
        
        <p>
            <form:label path="lastName">lastName:</form:label>
            <form:input path="lastName"/>
            <form:errors path="lastName" class="text-danger"/>
        </p>
        
        <p>
            <form:label path="email">email:</form:label>
            <form:input path="email"/>
            <form:errors path="email" class="text-danger"/>
        </p>
        
        
        <p>
            <form:label path="password">Password:</form:label>
            <form:password path="password"/>
        </p>
        <p>
            <form:label path="passwordConfirm">Password Confirmation:</form:label>
            <form:password path="passwordConfirm"/>
        </p>
        <input type="submit" value="Register this thing"/>
    </form:form>
</body>
</html>
