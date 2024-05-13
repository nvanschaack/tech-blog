const signupInfo = async (event) => {
    event.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

  if (username.length >= 6 && password.length >=8) {
    const response =await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
                username: username,
                password: password
            }
        )
    })

    if(response.ok){
        document.location.replace('/')
    } else{
        alert('failed to sign up')
    }

  } else{
     alert('username needs to be 6 characters or more and password needs to be 8 or more characters')
  }
 
}

document.getElementById('signupForm').addEventListener('submit', signupInfo)