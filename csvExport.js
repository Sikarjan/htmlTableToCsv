/*
  htmlTableToCsv  Copyright (C) 2016 Sikarjan
  *  This program comes with ABSOLUTELY NO WARRANTY
  *  This is free software, and you are welcome to redistribute it under certain conditions.
  *  URL: https://github.com/Sikarjan/htmlTableToCsv/blob/master/csvExport.js
    
To call the function from your website use something like this:
<input type="button" value="Export result" onClick="csvTableExport(document.getElementById('resultTable'),'result')" />
*/

function csvTableExport(table, fileName){
	var csvContent = "data:text/csv;charset=utf-8,";
	for (var i = -1; i < table.tBodies[0].rows.length; i++) {
		var row = i==-1? table.tHead.rows[0]:table.tBodies[0].rows[i];
		var dataRow = '';
		for (var j = 0; j < row.cells.length; j++) {
			dataString = row.cells[j].textContent;
			dataString = dataString.replace(/\s/g,' '); // use this line to modify your output string, e.g. remove non-breaking spaces
			dataRow += dataString +';';
		}
		csvContent += i < table.tBodies[0].rows.length-1 ? dataRow.replace(/;$/,"\n"):dataRow.replace(/;$/,"");
	}
//	console.log(csvContent);
	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);
	link.setAttribute("download", fileName+".csv");
	document.body.appendChild(link); // Required for FF

	link.click();
}
