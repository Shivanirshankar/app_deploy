document.getElementById("submitBtn").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value;
    
    fetch("/api/greet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = data.message;
    });
});
