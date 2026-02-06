const accountId = 144553
let accountemail = "Ankit@google.com"
var accountpassword = "12345"
accountcity = "patna"


// accountId = 223 not allowed
console.log(accountId);
accountemail = "Ayan@gmail.com"
accountpassword = "222334"
accountcity = "Bengaluru"

// if we try to check all this above and print it it will take more time to individually print it
// so we use another property 
// console.table
console.table([accountId, accountemail, accountpassword, accountcity,]);

//prefer not to use var
//be//acuse issue in block scope and functional scope0


