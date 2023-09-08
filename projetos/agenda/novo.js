const endpoint = 'http://localhost:3000/agendas'

fetch(endpoint)
.then(res => res.json())
.then(res => console.log(res))