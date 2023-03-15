Feature('login');

Scenario('test something',  ({ I }) => {
    //1
    // I.amOnPage('/');
    // I.wait(2);
    // I.login('i192190@lhr.nu.edu.pk','JAt9is-r4jvdxb21')
    // I.see('did not match stored password');

    //2
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
    I.see('item-price')
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

});

