/**
 * 
 */
$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});

// SAVE ============================================
$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateItemForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid------------------------
	var type = ($("#hidpIDSave").val() == "") ? "POST" : "PUT";
	$.ajax(
		{
			url: "UsersAPI",
			type: type,
			data: $("#formUser").serialize(),
			dataType: "text",
			complete: function(response, status) {
				onItemSaveComplete(response.responseText, status);
			}
		});
});

function onUserSaveComplete(response, status) 
{
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidpIDSave").val("");
	$("#formUser")[0].reset();
}

$(document).on("click", ".btnRemove", function(event) {
	$.ajax(
		{
			url: "UsersAPI",
			type: "DELETE",
			data: "userID=" + $(this).data("userID"),
			dataType: "text",
			complete: function(response, status) {
				onItemDeleteComplete(response.responseText, status);
			}
		});
});

function onUserDeleteComplete(response, status) 
{
	if (status == "success") {
		
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event) {
	$("userID").val($(this).closest("tr").find('td:eq(0)').text());
	$("#name").val($(this).closest("tr").find('td:eq(1)').text());
	$("#nic").val($(this).closest("tr").find('td:eq(2)').text());
	$("#email").val($(this).closest("tr").find('td:eq(3)').text());
	$("#contact").val($(this).closest("tr").find('td:eq(4)').text());

});

// CLIENT-MODEL================================================================
function validateItemForm() {
	// CODE
	if ($("#userID").val().trim() == "") {
		return "Insert User ID.";
	}
	// NAME
	if ($("#name").val().trim() == "") {
		return "Insert User Name.";
	}
	// NIC
	if ($("#nic").val().trim() == "") {
		return "Insert NIC.";
	}
	// EMAIL
	if ($("#email").val().trim() == "") {
		return "Insert Email.";
	}
	// CONTACT-------------------------------
	if ($("#contact").val().trim() == "") {
		return "Insert Contact number.";
	}

}

