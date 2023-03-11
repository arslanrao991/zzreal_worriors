// in this file you can append custom step methods to 'I' object
const { I } = inject();

module.exports = function() 
{
  return actor({
    fields: 
    {
      email: "username",
      password: "password",
    },
    buttons:
    {
      executeQueryButton: {xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/main/div[1]/div/div[2]/aside/button'}
    },

    login: function(email, password) 
    {
      //optimized
      I.fillField("username", email);

      //optimized
      I.fillField("password", password);

      //I.click({xpath: '//*[@id="root"]/div/div/main/div/div[2]/div/div[2]/div/form/button/div'});
      //optimized
      I.click("//div[@class='css-zxs4gr emiw9oj1']");
    },

    run_query: function()
    {
      I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/main/div[1]/div/div[2]/aside/button'});
      //optimized
      //I.click("//svg[@class='Icon Icon-refresh e621b520 css-4g44w1 e621b521']");
    },

    type_query: function(query)
    {
      //optimized
      I.fillField("//div[@id='id_sql']" , query);
    },

    see_visualization: function()
    {
      //I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/main/div[3]/div/div[1]/button[1]/div/div'});
      //optimized
      I.click("//div[@class='hide sm-show css-1n4dmac emiw9oj0']");
    },
    
    select_line_visualizations: function()
    {
      //I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/aside[1]/div/div/div/div[2]/div[1]/div[1]'});
      //optmimized
      I.click("//div[@data-testid='Line-button']");
     
      I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/aside[1]/div/div/div/div[2]/div[2]/div[1]/div/div/div/div/a/button'});
      //I.clicl("//div/a/button[@data-testid='select-button']");
      I.click('SEATS');
      
      I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/aside[1]/div/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/a/button'});
      I.click('ID');
    },
     
    adjust_display_options: function()
    {
      //I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/main/div[3]/div/div[1]/button[2]/div/div'});
      //optmimized
      I.click("//div/button[@data-testid='viz-settings-button']");

      //I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/aside[1]/div/div/div/div[2]/div[1]/div/div/label[2]/div/span'});
      //optimized
      I.click("//div[@class='css-ub1o4z e1wsrfy62']");

      //I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/aside[1]/div/div/div/div[2]/div[2]/div[1]/input'});
      //optimized
      I.click("//input[@class='css-wmh81x e1j36t5d0']");
    },
    
    click_done_button_in_visualization: function()
    {
      //I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/aside[1]/div/div/button/div/div'});
      //optimized
      I.click("//div[@class=' css-1jjjg2j emiw9oj0']");
    },

    see_text_in_sql_editor: function(text)
    {
      I.see(text,"//div[@id='id_sql']");
    }



  });
}
