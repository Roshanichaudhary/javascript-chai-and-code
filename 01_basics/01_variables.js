const accountId=144553
let accountEmail="rosh@google.com"
var accountPassword="12345"
accountCity="jaipur"

//accountId=2// not allowed
accountEmail="aba"
accountPassword="12398"
accountCity="lu"
/* prefer not to  use var beacuse of issues in block scope and functional scope*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);
