var sessionName ;
var sessionUser;
function check_user()
{
    var check = window.sessionStorage.getItem("has_logged_in");
    if(check==null)
    {
        console.log("you haven't Logged in!")
    }
    else{
    
            window.location.replace("http://vigneashsundar.in/post");
    }
    
}

function check_user_session()
{
    var check = window.sessionStorage.getItem("has_logged_in");
    if(check==null)
    {
        
        window.location.replace("http://vigneashsundar.in/login");
    }
    else{
    
         console.log("Things are fine to GO dude")   
         sessionName=sessionStorage.getItem("sessionName");
         sessionUser=sessionStorage.getItem("sessionUser");
         
    }
    
}

function set_session()
{

    sessionStorage.setItem("has_logged_in","true")
    sessionStorage.setItem("sessionName",session_name)
    sessionStorage.setItem("sessionUser",session_user)
}

function redirect_user()
{
    window.location.replace("http://vigneashsundar.in/post")
}