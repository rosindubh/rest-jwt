export const fetchRequest = async (username, email, pass, setter) => {
    try {
        const response = await fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: username,
                email: email,
                password: pass,
            }),
        });
        const data = await response.json();
        console.log(data.user)
            console.log(data.user.username);
            setter(data.user)
    } catch (error) {
        console.log(error);
    }
}