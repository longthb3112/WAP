$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();
    
    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    var guestList = data;
    var content = "";
    $.each( data, function( i, val ) {
        content+= "<tr>";
        content+= "<td>" + val.first + "</td>";
        content+= "<td>" + val.last + "</td>";
        content+= "</tr>";
    });
    var table = "<table style='border: solid 1px'><tr><th>First Name</th><th>Last Name</th></tr>" + content + "</table>";
    $("#guestList").html(table);
    
}