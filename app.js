
const sign_in_btn = document.querySelector("#sign-in-btn");
const reset_btn = document.querySelector("#reset");
const container = document.querySelector(".container");

reset_btn.addEventListener("click", () => {
  container.classList.add("reset-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("reset-mode");
});

  
  
    //signup function
    function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
  
      const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      //
      promise.catch(e=>alert(e.message));
      alert("SignUp Successfully");
    }
  
    //signIN function
    function  signIn(){
      var email = document.getElementById("email");
      var password  = document.getElementById("password");
      const promise = auth.signInWithEmailAndPassword(email.value,password.value);
      promise.catch(e=>alert(e.message));
      
    }
    
    //active user to homepage
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        var email = user.email;
        alert("Hello "+email);
      }
    })

    document.getElementById("loginForm").addEventListener("submit",(event)=>{
      event.preventDefault()
    })

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        location.replace("main.html")
      }
    })