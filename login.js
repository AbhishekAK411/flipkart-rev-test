function login(event){
    event.preventDefault();

    var f_loginEmail = document.getElementById("flipkart_login_email").value;
    var f_loginPassword = document.getElementById("flipkart_login_password").value;
    if(f_loginEmail && f_loginPassword){
        var flipkart_storage = JSON.parse(localStorage.getItem("flipkart_users"));
        var flipkart_current_user;
        var flag = false;
        for(var i=0;i<flipkart_storage.length;i++){
            if(flipkart_storage[i].userEmail == f_loginEmail && flipkart_storage[i].userPassword == f_loginPassword){
                flag = true;
                flipkart_current_user = flipkart_storage[i];
            }
        }
        if(flag){
            localStorage.setItem("flipkart_currentUser", JSON.stringify(flipkart_current_user));
            window.location.href = `./home.html`;
        } else {
            alert("Credentials are wrong");
        }
    } else {
        alert("all fields are mandatory");
    }
}