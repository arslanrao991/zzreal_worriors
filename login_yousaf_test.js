Feature('login_yousaf');



Scenario('test something',  ({ I }) => {
    //1
   // I.amOnPage('/');
   // I.wait(2);
   // I.login('yousafqadri78@gmail.com','JAt9is-r4jvdxb21')
  //  I.see('did not match stored password');

    //2
   I.amOnPage('/');
    I.wait(2);
    I.login('yousafqadri78@gmail.com','yousaf123')
    I.wait(2);

    //3
    //3
    I.click('New');
    I.wait(2);
    I.click('Question');
    I.wait(2);

    //4
    I.click('#DatabaseSchemaPicker > div > div:nth-child(1)');
    I.wait(5);
    I.click('#DataPopover > div > div > div:nth-child(2)');
    I.wait(2);

    //5
    I.click('#root > div > div > main > div > div > div.css-2mi1c6.eb9z3dt3 > div > div.css-1mjo75b.e17ixpr11 > span > a');
    I.wait(5);
    I.click('#SaveQuestionModal > div.ModalBody.px4 > div > form > div.flex.align-center.flex-reverse > button.Button.Button.eyw0xx60.Button--primary.css-1q6qtcj.emiw9oj2');
    I.wait(2);
    I.click('#QuestionSavedModal > div.ModalBody.px4 > div > div > button.Button.Button--primary');
    I.wait(5);
    I.click('#AddToDashSelectDashModal > div.ModalBody.px4 > div > div > div > div.css-umwchj.e1u5yeuo1 > div:nth-child(2)');
    I.wait(5);

  
    //6
   
    I.wait(5);
    //Hover over to the question to be deleted
    I.moveCursorTo('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(1) > div');
    I.wait(5);
    //click on the remove icon of the question
    I.click('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(1) > div > div.css-1iuos5l.eumzn1k0 > span > span > a');
    I.wait(5);
    //Confirm the removal of the question
    I.click('body > div:nth-child(5) > div > div > div > div > div > div.ModalBody.px4 > div > div > button.Button.eyw0xx60.Button--danger.css-ske0jo.emiw9oj2');
    I.wait(5);
    

    //7

    //add text box
    I.click('#root > div > div > main > div > div > div > header > div > div.QueryBuilder-section.wrapper.css-p12qac.e1qnfijs7 > div.css-1p8wk16.e1qnfijs1 > div > a > button');
    I.wait(2);
    I.moveCursorTo('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div.flex-full.overflow-hidden.pointer-events-none.flex.flex-column.full-height > div > textarea');
    I.click('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div.flex-full.overflow-hidden.pointer-events-none.flex.flex-column.full-height > div > textarea');
    I.wait(5);
    I.appendField('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div.flex-full.overflow-hidden.pointer-events-none.flex.flex-column.full-height > div > textarea','I am testing this.')
   // I.seeTextEquals('I am testing this.')
    I.wait(5);

    //8
    //Text card visualisation 
    //I.wait(2);
    //I.moveCursorTo('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div.flex-full.overflow-hidden.pointer-events-none.flex.flex-column.full-height > div > textarea');
    //I.click('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div.css-1iuos5l.eumzn1k0 > span > a.text-dark-hover.cursor-pointer.flex.align-center.flex-no-shrink.mr1.drag-disabled.no-decoration.css-0.egqvz7l0 > svg');
    //I.wait(5);
    //I.moveCursorTo('body > div:nth-child(8) > div > div > div > div > div > div > div.Grid-cell.flex.flex-column.pt2 > div.py2.px4 > div > button.Button.ml2.eyw0xx60.Button--primary.css-1q6qtcj.emiw9oj2 > div');
    //I.click('body > div:nth-child(8) > div > div > div > div > div > div > div.Grid-cell.flex.flex-column.pt2 > div.py2.px4 > div > button.Button.ml2.eyw0xx60.Button--primary.css-1q6qtcj.emiw9oj2 > div > div');
    //I.wait(2);

  //9
  I.wait(2);
  I.moveCursorTo('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div.css-1iuos5l.eumzn1k0 > span > a.text-dark-hover.cursor-pointer.h3.flex-no-shrink.relative.mr1.drag-disabled > span > span > svg');
  I.click('#root > div > div > main > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div.css-1iuos5l.eumzn1k0 > span > a.text-dark-hover.cursor-pointer.h3.flex-no-shrink.relative.mr1.drag-disabled > span');
  I.wait(5);

});


