Feature('login');

Scenario('test something',  async ({ I }) => {
    //1
    I.amOnPage('/');
    I.wait(2);
    I.login('i192190@lhr.nu.edu.pk','JAt9is-r4jvdxb21')
    I.see('did not match stored password');

    2
   I.amOnPage('/');
    I.wait(2);
    I.login('i192190@lhr.nu.edu.pk','JAt9is-r4jvdxb2')
    I.wait(2);

    //3
    I.click('Browse data');
    I.wait(2);
    I.click('Sample Database');
    I.wait(2);
    I.click('Orders');
    I.wait(3);

    //4
    I.call_Show_editor();
    I.call_custom_column();

    //5 check whether the field formula could be written.  (Correct formula)

    I.Type_formula('[Subtotal] /[Quantity]');
    I.see_formula_in_sql_editor('[Subtotal] /[Quantity]');



    //5 check for custom column name could be add or not 


    I.Type_c_column_name('item-price');
    //I.see_c_name_name_field('item-price');
    I.wait(2)
    I.click('Done')

    //6 

    I.click('Visualize')
    I.wait(2)
   // I.see('item-price',{xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/main/div[1]/div/div/div[2]/div/div/div[3]/div/div[8]/div[1]'})
    //I.see('item-price')
//  -----------------------------------------------------------------------
   // 7 Test whether it gives error when you type wrong formula format.


    // I.Type_formula('[Subtotal] * [Created At]');
    // I.see_formula_in_sql_editor('[Subtotal] * [Created At]');



    // //5 check for custom column name could be add or not 


    // I.Type_c_column_name('aaa');
    // //I.see_c_name_name_field('item-price');
    // I.click('Done');

    // //6 

    // I.click('Visualize');
    // I.wait(2)
    // I.see('There was a problem with your question');


//-------------------------------Test filters on Table----------------

    I.amOnPage('/');
    I.wait(2);
    I.login('i192190@lhr.nu.edu.pk','JAt9is-r4jvdxb2')
    I.wait(2);

    //3
    I.click('Browse data');
    I.wait(2);
    I.click('Sample Database');
    I.wait(2);
    I.click('Invoices');
    I.wait(4);

    //4  apply filter to table 
    I.click('Filter');
    I.click('Last Month');
    I.click('Apply Filters');
    I.wait(2);


    // remove filters from table
    I.click('Filter');
    I.click('Clear all filter');
    I.click('Apply Filters');

//---------------------------Test the filter widget---------------------------

    //1 login
    I.amOnPage('/');
    I.wait(2);
    I.login('i192190@lhr.nu.edu.pk','JAt9is-r4jvdxb2')
    I.wait(2);

    //2 New SQL query page
    I.click('New');
    I.click('SQL query');

    //3 Writing SQL query in which you can do filter widget thing
    // I.type_sql_query('select count(*) from PEOPLE [[where STATE = {{the_state}}]]');
    // I.see_text_in_sql_editor('select count(*) from PEOPLE [[where STATE = {{the_state}}]]');
    // I.wait(2);

    //3 (Alternative) Write corect SQL query but with not filter widget
    I.type_sql_query('select ID from PEOPLE');
    I.see_text_in_sql_editor('select ID from PEOPLE');
    I.wait(2);
    I.run_query();
    I.dontSee('Variable')


    //4 See variable page open or not.
    // I.see('Variables')

    // //5 Add the value for filter widget
    // I.type_the_filter_widget('CA');
    // I.run_query();

    // //6 see Result
    // I.see('90')
 
});
