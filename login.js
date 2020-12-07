function validate(){
    var promise=new Promise((resolve,reject)=>{
        var user=document.getElementById("user").value;
        var pwd =document.getElementById("pwd").value;
    
    
        if(user==="admin" && pwd==="12345")
        {
            resolve("Successfully logged in");
        }
        else{
            reject("Fields does not match");
        }
    
    });
    promise
    .then((message)=>{
       console.log(message);
    })
    .catch((message2)=>{
        alert(message2);
    })
}
