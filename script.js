const form = document.forms.namedItem('application')
const imps = form.querySelectorAll('input')



form.onsubmit = (event) => {
    event.preventDefault()


  //   let error = false

  //  imps.forEach(imp => {
  //   if (imp.value.length === 0) {
  //     error = true
  //   }
  //  })


  //  if (error) {
  //   alert('Error please fill all fields')
  //   return
  //  }


   const user = {}
   const fm = new FormData(form)

   fm.forEach((val ,key) => {
        user[key] = val
   })



   console.log(user);
  //  console.log('worls');
   form.reset()

    
}


document.querySelector('#myForm').addEventListener('submit', function(event) {
  const name = document.querySelector('.name').value
  const email = document.querySelector('.email').value
  const age = document.querySelector('.Age').value
  const about = document.querySelector('.About_you').value
  const js = document.querySelector('.js').value
  const html = document.querySelector('.HTML').value
  const css = document.querySelector('.CSS').value


  const nameError = document.querySelector('#nameError')
  const emailError = document.querySelector('#emailError')
  const ageError= document.querySelector('#ageError')
  const aboutError= document.querySelector('#aboutError')
  const jsError= document.querySelector('#jsError')
  const hTMLError= document.querySelector('#HTMLError')
  const cSSError= document.querySelector('#CSSError')



  if(name === "") {
    nameError.textContent = "Please enter your email adress"
    event.preventDefault()
    return false
  }
  if(email === "") {
    emailError.textContent = "Please enter your email adress"
    event.preventDefault()
    return false
  }
  if( age=== "") {
    ageError.textContent = "Please enter your email adress"
    event.preventDefault()
    return false
  }
  if(about === "") {
    aboutError.textContent = "Please enter your email adress"
    event.preventDefault()
    return false
  }
  if(js === "") {
    jsError.textContent = "Please enter your email adress"
    event.preventDefault()
    return false
  }
  if(html === "") {
    hTMLError.textContent = "Please enter your email adress"
    event.preventDefault()
    return false
  }
  if(css === "") {
    cSSError.textContent = "Please enter your email adress"
    event.preventDefault()
    return false
  }

}) 
  





//   if (username === "") {
//       usernameError.textContent = "Введите имя пользователя";
//       event.preventDefault();
//       return false;













// document.getElementById("myForm").addEventListener("submit", function(event) {
//   var username = document.getElementById("username").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;
//   var usernameError = document.getElementById("usernameError");
//   var emailError = document.getElementById("emailError");
//   var passwordError = document.getElementById("passwordError");
  
//   usernameError.textContent = "";
//   emailError.textContent = "";
//   passwordError.textContent = "";

//   }
//   if (email === "") {
//       emailError.textContent = "Введите email";
//       event.preventDefault();
//       return false;
//   }
//   if (password === "") {
//       passwordError.textContent = "Введите пароль";
//       event.preventDefault();
//       return false;
//   }
// });



























// для малых количевст инпутов
// const user = {
    //     name: imps[0].value,
    //     surname: imps[1].value
    // }
    // form.reset()

    // console.log(user);