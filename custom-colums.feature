Given: I have opened a sample Database page showing the Table present in database.
When: I click on ‘Show/Open Editor’.
Then:  I should be able to see ‘Custom column’ button.

Given: I have opened the Editor page.
When: I Click on ‘Custom Column’.
Then:  I should be directed to Custom Column creation page.



Given: I have opened custom columns creation page.
When: I Typed the field formula using same type of columns.
And: I also enter the name of custom column.
Then:  I click on “Done” button.


Given: I am back to editor page
When: I clicked on ‘Visualize’ button
Then:  I should directed to Table page and I can see my new custom column.


Given: I have opened custom columns creation page.
When: I Typed the field formula using different data type of columns.
And: I also enter the name of custom column.
And: I click on “Done” button.
And:  click on “Visualize” button.
Then:  An error message is prompted indicating the different data types for mathematical operation on table page.


Given: I had made the changes on columns, I wanted in custom columns page
When : I set the new column name
And: I save the name
Then:  a new column is created with the name and changes I made