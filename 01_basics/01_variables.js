const accountId = 1443
let accountEmail = "arsalan@gmail.com"
var accountPassword = "12345"
accountCity = "St. Cloud"
let accountState;

// accountId = 2 -> not allowed

accountEmail = "a@gmail.com"
accountPassword = "0000"
accountCity = "London"

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
/*
Prefer not to use var, because of issue in block scope and functional scope
*/