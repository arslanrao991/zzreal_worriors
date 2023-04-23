Given: I have metabase page open and user is created
When: I type correct username 
And password
And click Sign in
Then: I should sign in

Given: I have metabase page open and user is created
When: I type incorrect username 
And password
And click Sign in
Then: I should see incorrect username or password

Given: Database already exist
When: I click on New button
And I select SQL query from drop down menu
Then: Query editor should open 

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

Given: I have SQL editor open
When: I type query with {CREATED_AT} in where clause
Then: I shoud see Varaible




