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

      
      I.click("//div[@class='css-zxs4gr emiw9oj1']");
    },

  });
}