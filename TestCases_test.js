const assert = require('assert');
const axios = require('axios');

Feature('TestCases.js');

Scenario('Open Metabase Then SQL Editor', async ({I}) =>
{

    //1
    // I.amOnPage('/');
    // I.wait(2);
    // I.login('l191110@lhr.nu.edu.pk','metabase1234')
    // I.see('did not match stored password');

    // //2
    // I.amOnPage('/');
    // I.wait(2);
    // I.login('l191110@lhr.nu.edu.pk','metabase123')
    // I.wait(2);

    // //3
    // I.click('New');
    // I.wait(2);
    // I.click('SQL query');

    // //4
    // // I.type_query('SELECT* FRM ACCOUNTS');
    // // I.see_text_in_sql_editor('SELECT* FRM ACCOUNTS');
    // // I.wait(2)

    // //5
    // // I.run_query();
    // // I.wait(2);
    // // I.see('Syntax error')

    // //6
    // I.type_query('SELECT* FROM ACCOUNTS');
    // I.see_text_in_sql_editor('SELECT* FROM ACCOUNTS');
    // I.wait(2)
    // I.run_query();
    // I.wait(2);

    // // //7
    // I.see_visualization();
    // I.wait(2);

    // // //8
    // I.select_line_visualizations();
    // I.click_done_button_in_visualization();
    // I.wait(2);

    // // //9
    // I.see_visualization();
    // I.adjust_display_options();
    // I.click_done_button_in_visualization();
    // I.wait(2);

    // //10
    // I.type_query('select * from ORDERS where {{CREATED_AT}}');
    // I.see_text_in_sql_editor('select * from ORDERS where {{CREATED_AT}}');
    // I.wait(2);
    // I.see("Variables");
    // I.wait(2);
});
