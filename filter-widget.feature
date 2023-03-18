Given: I have logined
When: I click on ‘New’
And: I click on ‘SQL query’.
Then: I should be able to see area to write query.


Given: I am on sql query page.
When: I write the specific query having filter involve
Then: I should be able to see variable page on right side of query page.

Given: I am on sql query page.
When: I write the simple query without filter involve.
Then: I should not be able to see variable page on right side of query page.

Given: I am on query page.
When: I type value of filter widget.
And: I click on ‘Run’
Then: I should be able to see result on button of query page.