// from data.js
var tableData = data;

var tbody = d3.select("tbody");
// console.log(data);

//If no value added / no change to input, return data

//use d3 to update each cell's text with ufoReport values (Date, City, State, Country, Shape, Duration, Comments)
function generateTable(){ 
	data.forEach(function(ufoReport){
		// console.log(ufoReport);
		// add a row for each record
		var row = tbody.append("tr");
		// add values to table using Object
		Object.entries(ufoReport).forEach(function([key,value]){
			// console.log(key,value);
			var cell = tbody.append("td");
			cell.text(value);
		});
	});
};

generateTable();

// defining variables
function myFilter() {
	var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("datetime");
    filter = input.value;
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
    console.log(input.value);

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
        	tr[i].style.display = "none";
            // if(tr[i].id != 'tableHeader'){tr[i].style.display = "none";}
        }
    }
	}     
	


// ===========================================================================
/*Notes in function
	txtValue is undefined
	WHICH column is it being applied to?
	what are date value columns called?

*/

// ===========================================================================
//then filter data, rerun ^^ code with filter applied
//need to clear our rows first before re-loading

// function generateTable (data){
	// clear out the existing data on the front end 

	// for each item in teh array 

	// this is incomplete - look at it later

// })





// //adding the filter
// function handleClick(){
// 	//prevent page from refreshing (defulat html button behavior)
// 	d3.event.preventDefault()
	
// 	//grab user entered date time value
// 	d3.select("#filter-btn").on("click", function(){
// 		text = d3.select("#datetime").property("value");
// 	})

// 	//filter hte dataset to the user entered value
// 	// hit use the .filter() function

// 	// call generateTable() function above using new filtered table

// 	//think about how to handle when someone enters an empty date
// }




//some function has to regenerate the atble using the value in the input
//re-run the code, with a filter applied

// look at example where 

// button id is filterButton

// =====================================================================
// THIS DOESNT WORK

// function filterByDate() {
//   var input, filter, table, tr, td, i, txtValue;
//   input = document.getElementById("datetime");
//   filter = input.value.toUpperCase();
//   table = document.getElementById("ufo-table");
//   tr = table.getElementsByTagName("tr");
//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }       
//   }
// }

// Aash live coding


