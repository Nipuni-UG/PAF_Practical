<%@page import="com.UsersAPI"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>User Management</title>
<link rel="stylesheet" href="Views/bootstrap.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/user.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>User Management Service</h1>
				<form id="formUser" name="formUser">
					User ID: <input id="userID" name="userID" type="text"
						class="form-control form-control-sm"> <br>
					User Name:<input id="name" name="name" type="text"
						class="form-control form-control-sm"> <br> 
				    NIC: <input id="nic" name="nic" type="text"
						class="form-control form-control-sm"> <br> 
					Email: <input id="email" name="email" type="text"
						class="form-control form-control-sm"> <br>
				    Contact Number: <input id="contact" name="contact" type="text"
						class="form-control form-control-sm"> <br>
					
							
						 <input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hidpIDSave" name="hidpIDSave" value="">
				</form>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
				<div id="divUsersGrid">
					<%
					              Users userObj = new Users());
					              out.print(userObj.readUsers()); 
					%>
				</div>
			</div>
		</div>
	</div>
</body>
</html>