
validate_login=()=>{
    var u_email=document.getElementById('u_email').value;
    var u_pass=document.getElementById('u_pass').value;
    if(u_email==""||u_pass=="")
    {
        alert("Please fill details");
    }
    else
    {
    alert("Loggin in....Check Console(F12)");
    console.log("Email: ",u_email);
    console.log("Password: ", u_pass);
    document.write("<h1>Hello </h1> " + u_email +"<p>Welcome Back</p>"+'<img src="./welcome.jpeg">'+'<a href="./index.html">Logout</a>'+"<style>*{text-align:center;color:#3494ff;font-size:17px;margin:15px 15px;}h1{color:green;font-size:25px;}p{color:#0ab527;font-size:20px;}img{border-radius:20px}a{text-decoration:none;font-size:16px;color:white;padding:10px 10px;background-color:#f80000;border-radius:10px}a:hover{color:yellow;}</style>");
    }
 }


validate_register=()=>{
    var u_fname=document.getElementById('fname').value;
    var u_lname=document.getElementById('lname').value;
    var u_regemail=document.getElementById('u_regemail').value;
    var u_mobile=document.getElementById('u_mobile').value;
    var u_regpass=document.getElementById('u_regpass').value;
    var u_con_regpass=document.getElementById('u_con_regpass').value;
    if(u_mobile>10 && u_mobile<10)
    {
        alert("Please enter valid mobile number");
    }
    if(u_regpass<8)
    {
        alert("Please make password strong");
    }    
    if(u_regpass!=u_con_regpass)
    {
        alert('Password mismatch');
    }
    else{
        console.log("Firstname: ",u_fname);
        console.log("Lastname: ", u_lname);
        console.log("Email: ",u_regemail);
        console.log("Mobile: ", u_mobile);
        console.log("Password: ",u_regpass);
        console.log("Confirm Password: ", u_con_regpass);
        alert("User registered. Enjoy our services with login....Check Console(F12)");
    }
    
        
    
 }
forgetbtn=()=>{
    var forgetbtn=document.getElementById('forget-pass-msg');
    forgetbtn.style.display="block";
}
forgetclose=()=>{
    var forgetbtn=document.getElementById('forget-pass-msg');
    forgetbtn.style.display="none";
}

// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };

