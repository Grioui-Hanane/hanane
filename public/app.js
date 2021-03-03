document.getElementById('btn').addEventListener("click", () => {
    const username = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    fetch('/acces-file', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: username , password : pass})
    });
});