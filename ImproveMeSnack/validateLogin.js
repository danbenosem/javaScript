const login= function (username, password){

if((username.length>4) && password.length>4){

   return "that is okay"
}
 
return "not validated"




}


console.log(login("qw","qw234"))
