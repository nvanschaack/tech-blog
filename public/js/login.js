const loginInfo = async (event) => {
    event.preventDefault()

    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    username: username,
                    password: password,
                }
            )
        })
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('failed to login')
        }
    } else {
        alert('incorrect username or password')
    }

}

document.getElementById('loginForm').addEventListener('submit', loginInfo)