window.addEventListener("DOMContentLoaded", e => {
    const display = document.getElementById("display");
    const [b1, b2, b3] = document.querySelectorAll("button");
    // console.log(b1, b2, b3);
    const query1 = "http://localhost:3333/users?id=1&token=abc";
    const query2 = "http://localhost:3333/users/2/def";
    const query3 = "http://localhost:3333/users";
    
    b1.addEventListener("click", e => {
        console.log(`Click on ${e.target.innerText}`);
        fetch(query1)
            .then(response => {     // gestibile direttamente perché ritorna una risposta e non un oggetto dal server
                console.log(response);
                display.innerText = `1: ${response.status} ${response.statusText}`
            })
            .catch(e => console.error(e.message))
    })

    b2.addEventListener("click", e => {
        console.log(`Click on ${e.target.innerText}`);
        fetch(query2)
            .then(response => {
                console.log(response);
                display.innerText = `2: ${response.status} ${response.statusText}`
            })
            .catch(e => console.error(e.message))
    })

    b3.addEventListener("click", e => {
        console.log(`Click on ${e.target.innerText}`);
        const tmpReq = {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: new URLSearchParams({
                id: 3,
                token: "ghi"
            })
        }
        fetch(query3, tmpReq)
            .then(response => {
                console.log(response);
                display.innerText = `3: ${response.status} ${response.statusText}`
            })
            .catch(e => console.error(e.message));
    })
})
