// in this file you can append custom step methods to 'I' object
const {I} = inject();

module.exports = function() {
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

    call_Show_editor: function()
    {
      I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[1]/div/div[2]/div[1]/button'})
    },

    call_custom_column: function()
    {
      I.click({xpath: '//*[@id="root"]/div/div/main/div/div/div[2]/div/div/div/div/div/div[3]/button[4]'})
    },

    Type_formula: function(f){
      I.fillField("//div[@id='ace-editor']" , f);
    },

    see_formula_in_sql_editor: function(text)
    {
      I.see(text,"//div[@id='ace-editor']");
    },

    Type_c_column_name: function(n){
      I.fillField('.my1.input.block.full',n);
    },
    see_c_name_name_field: function(s_n){
      I.see(s_n,'.my1.input.block.full');
    },

  });
}
