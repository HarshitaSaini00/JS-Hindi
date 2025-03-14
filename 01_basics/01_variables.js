const accountId = 1234
let accountEmail ="harshitasaini283@gmail.com"
var accountPassword ="321"
accountCity ="jaipur"
let accountState ;

// accountId = 2 // not allowed because we use constant we can't change it 

accountEmail = "hasc@gmail.com"
accountPassword ="666"
accountCity ="delhi"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and funtional scope
*/

console.table([accountId, accountEmail,accountPassword,accountCity])
