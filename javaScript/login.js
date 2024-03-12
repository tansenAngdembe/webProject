let login = document.getElementById("loginButton")
let loginForm = document.getElementsByClassName("box")
let nameValue = document.getElementById("name")
let passwordValue = document.getElementById("password")


  login.addEventListener("click", (event) => {
    event.preventDefault()
    let myData = {      
      name: nameValue.value,
      password: passwordValue.value
    }  
   
    if( myData.name && myData.password != null){
      localStorage.setItem("User", JSON.stringify(myData))
      
    }else{
      console.log("please enter data")
    }

  
  })

