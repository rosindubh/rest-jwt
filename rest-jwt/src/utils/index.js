export const fetchRequest = async (username, email, pass) => {
    try {
        const response = await fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: username,
                email: email,
                password: pass
            })
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}