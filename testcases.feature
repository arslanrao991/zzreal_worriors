Given: I have metabase page open and user is already created
When: I type correct username 
And password
And click Sign in
Then: I should sign in

Given: I have home page open 
When: I click on New button 
And I select Question from drop down menu
Then: Question Page should open

Given: I have Question page open 
When: I click on Pick Starting Data 
And I select Sample Database from drop down menu
And I select Accounts from Sample Database
Then: Question is created containing Accounts Data

Given: I have created a Question
When: I click on the Save button
And I write the name of the question to be Saved as
And I click the Save button
Then: Question is Saved

Given: I have clicked on Save button for question
And I have clicked on Yes Please for Add To Dasboard
And I select an existing Dashboard or a new Dashboard
Then: Saved Question is added to the Dasboard

Given: I have added Saved Question to the Dashboard
And I have Dashboard open in editing mode
And I hover the cursor to the Question's card
And I click on Remove and Confirm the Removal
Then: Question is Removed from the Dashboard Successfully

Given: I have Dashboard open in editing mode
And I click on Add a Text Box button
Then: Text Box is added to the Dashboard Successfully

Given: I have Dashboard open in editing mode
And I hover over the cursor on the Text Box card
And I  click on visualise 
Then: I am able to visualise the Text Box Successfully

Given: I have Dashboard open in editing mode
And I hover over the cursor on the Text Box card
And I  click on Preview 
Then: I am able to Preview the Text Box Successfully

Given: I have added Text Box to the Dashboard
And I have Dashboard open in editing mode
And I hover the cursor to the Text Box
And I click on Remove and Confirm the Removal
Then: Text Box is Removed from the Dashboard Successfully
