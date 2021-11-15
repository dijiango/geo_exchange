fetch('https://www.freeforexapi.com/api/live')
.then(response => response.json())
.then(data => console.log(data))