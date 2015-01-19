function check_user()
{
    var check = window.sessionStorage.getItem("has_logged_in");
    if(check==null)
    {
        console.log("you haven't Logged in!")
    }
    else{
    
            window.location.replace("http://localhost:5000/post");
    }
    
}

function check_user_session()
{
    var check = window.sessionStorage.getItem("has_logged_in");
    if(check==null)
    {
        
        window.location.replace("http://localhost:5000/login");
    }
    else{
    
         console.log("Things are fine to GO dude")   
    }
    
}

function set_user_dev()
{

    sessionStorage.setItem("has_logged_in","java")
}