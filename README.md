# htmlTableToCsv
Export the content of a html Table to a csv file with pure JavaScript

The provided code is adaped for my needs and probably needs some adjustments to meet your needs. The code expexts a table with a header <thead> (single row) and body <tbody> section. The th row will be used to create column headings.

Please note that MS Excel is ignoring the UTF-8 encoding. In case you export a table with non ASCI II characters and want to import the csv in Excel use the Data->From Text importer and change the encoding to UTF-8.
