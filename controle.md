comecei no dia 24/07/2023

https://youtu.be/eDVUmGnQJ_c

aula: 109

Rever:

- Funções geradoras
https://www.youtube.com/watch?v=B4VhL8dCrbw&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=137

5 minutos
componentes/caixa_msg_personalizada

https://github.com/cfbcursos/Novo-Javascript



=====================================================
Construção do CDN: 

https://cdn.jsdelivr.net/gh/jquery/jquery/  => Vem desse site: https://www.jsdelivr.com/?docs=gh

https://github.com/Roger-Franco/new_JavaScript/blob/main/componentes/tela_login/aula_online_cdn/login.js => Do meu arquivo no github

https://cdn.jsdelivr.net/gh/Roger-Franco/new_JavaScript/componentes/tela_login/aula_online_cdn/login.js  => Junção do CDN e o link do Github

=================================================================
Fake API: json-server

json-server --watch db.json

https://github.com/typicode/json-server

método: GET ALL
  fetch("http://localhost:3000/produtos")
  .then(res => res.json())
  .then(res => console.log(res))


método: DELETE
const id = evt.target.parentNode.parentNode.firstChild.innerHTML
const endpoint = `http://localhost:3000/produtos/${id}`
      fetch(endpoint, {
      method: "DELETE",
      ContentType: 'application/json'
      // body: JSON.stringify(dados)
  })


método: POST
const dados = {
    'nome': f_nome.value,
    'celular': f_celular.value,
    'email': f_email.value,
    'date': f_dtnasc.value,
  }
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados)
}
const endpoint = 'http://localhost:3000/agendas'
  fetch(endpoint, options)
  .then(res => {
    if(res.status == 201) {
      console.log("OK")
    } else {
      alert('Erro ao gravar novo contato')
    }
  })

  Método: PUT

  const dados = {
        'id': document.getElementById('f_idEditar').value,
        'produto': document.getElementById('f_produtoEditar').value,
        'marca': document.getElementById('f_marcaEditar').value,
        'modelo': document.getElementById('f_modeloEditar').value
      }
      const endpoint = `http://localhost:3000/produtos/${id}`
      const options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    }
      const response = await fetch(endpoint, options)
      // alert(response)
      return response


Aula 204/ video 207

https://www.youtube.com/watch?v=-_FiTc4ZAM0&list=PLx4x_zx8csUg_AxxbVWHEyAJ6cBdsYc0T&index=207

