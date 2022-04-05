//order matters 
//Declare first and execute 

// Need to figure out how to get user Name to display on dashboard

//Create a separte web app for creating an account 
//or
// we use users username to welcome them to the dashboard

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("sindex.html")
    }
})

function logout(){
    firebase.auth().signOut()
}

