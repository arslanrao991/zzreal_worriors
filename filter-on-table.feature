Given: I have logined
When: I click on ‘Browser data’
And: I click on ‘Sample data’.
And: I click on ‘invoice’. It is a table.
Then: Invoice table should be shown that is stored in database.

Given: I am on Table page.
And: I can see the filter option
When: I click on the filter button
Then:  all the filters are displayed

Given: I have opened filter 
When: I click on ‘last month’
And: I click on ‘Apply filter’.
Then:  The Filter should be applied to table.

Given: I am on Table page.
And: I can see the filter option.
When: I click on the filter button.
And: I click on ‘Remove filter button’.
Then:  All the applied filter should be remove.