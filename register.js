function register(event){
    event.preventDefault();

    var f_name = document.getElementById("flipkart_username").value;
    var f_email = document.getElementById("flipkart_email").value;
    var f_password = document.getElementById("flipkart_password").value;
    var f_confirmPassword = document.getElementById("flipkart_confirm_password").value;


    if(f_name && f_email && f_password && f_confirmPassword){
        if(f_password.length >= 8 && f_confirmPassword.length >= 8){
            if(f_password == f_confirmPassword){
                var flipkart_storage = JSON.parse(localStorage.getItem("flipkart_users")) || [];
                var flag = false;

                for(var i=0;i<flipkart_storage.length;i++){
                    if(flipkart_storage[i].userEmail == f_email){
                        flag = true;
                    }
                }
                if(!flag){
                    var flipkart_object = {userName: f_name, userEmail: f_email, userPassword: f_password, userConfirmPassword:f_confirmPassword};
                    flipkart_storage.push(flipkart_object);
                    alert("Registration Successful");
                    localStorage.setItem("flipkart_users", JSON.stringify(flipkart_storage));
                    document.getElementById("flipkart_username").value = "";
                    document.getElementById("flipkart_email").value = "";
                    document.getElementById("flipkart_password").value = "";
                    document.getElementById("flipkart_confirm_password").value = "";

                } else {
                    alert("Already Registered. Proceed to login");
                    window.location.href = `./login.html`;
                }
            } else {
                alert("Password do not match");
            }
        } else {
            alert("length of the password is minimum 8 characters");
        }
    } else {
        alert("All fields are mandatory");
    }
}