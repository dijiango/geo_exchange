BASE_URL = "https://api.exchangerate.host/latest";

fetch(BASE_URL)
.then(r => r.json())
.then(data => console.log("This is what we get back", data));