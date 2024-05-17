// Add new row to the table when the "Add new item" button is clicked
document.getElementById("addButton").addEventListener("click", function() {
	var table = document.getElementById("shoppingList");
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	cell1.innerHTML = "<input type='text' name='item'>";
	cell2.innerHTML = "<select name='category'><option value='product'>Product</option><option value='cleaning_material'>Cleaning Material</option><option value='other'>Other</option></select>";
	cell3.innerHTML = "<input type='number' name='quantity'>";
});

// Remove the last row from the table when the "Remove item" button is clicked
document.getElementById("removeButton").addEventListener("click", function() {
	var table = document.getElementById("shoppingList");
	if (table.rows.length > 2) {
		table.deleteRow(-1);
	}
});

// Display an alert message when the "Send" button is clicked
document.getElementById("sendButton").addEventListener("click", function() {
	alert("Sent successfully!");
});