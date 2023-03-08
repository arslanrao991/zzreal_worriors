Given: I have already added database
When: I click New button
And I select SQL query from drop down
Then: Query editor should open and I should be able to write queries

Given: I have typed some query
When: I click query run button
Then: Sql editor should run query written in sql editor field

Give: I have typed some query
When: I click query run button
And there is sytax issue in query
Then: Sql editor should throw error

Given: I have typed some query
When: I click query run button
And ther is no syntax error in query
Then: Sql editor should show query result


Given: I have sql editor open And some copied text on clipboard
When: I paste copied text in sql editor
Then: Copied text should show in editor

Given: I have sql editor open And I have typed some query
When: I copy text from sql editor
Then: Text should be copied to clipboard



