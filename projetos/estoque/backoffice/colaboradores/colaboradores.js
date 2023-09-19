const dadosGrid = document.querySelector('#dadosGrid')
const btn_add = document.querySelector('#btn_add')
const novoColaborador = document.querySelector('#novoColaborador')
const btn_fecharPopup = document.querySelector('#btn_fecharPopup')
const btn_gravarPopup = document.querySelector('#btn_gravarPopup')
const btn_cancelarPopup = document.querySelector('#btn_cancelarPopup')
const f_telefone = document.querySelector('#f_telefone')
const telefones = document.querySelector('#telefones')
const f_nome = document.querySelector('#f_nome')
const f_id = document.querySelector('#f_id')
const f_tipoColab = document.querySelector('#f_tipoColab')
const f_status = document.querySelector('#f_status')
const f_foto = document.querySelector('#f_foto')
const img_foto = document.querySelector('#img_foto')

// n = Novo Colaborador | e = Editar Colaborador
let modoJanela = 'n'

const criarCxTelefone = (fone) => {
  // console.log(fone)
  const divTel = document.createElement('div')
    divTel.setAttribute('class', 'tel')

    const divNumTel = document.createElement('div')
    divNumTel.setAttribute('class', 'numTel')
    divNumTel.innerHTML = fone
    divTel.appendChild(divNumTel)
    
    const imgDelTel = document.createElement('img')
    imgDelTel.setAttribute('src', '../../imgs/deletar.svg')
    imgDelTel.setAttribute('class', 'delTel')
    // imgDelTel.setAttribute('data-idtel', id) // => data-set é importante para passar parametros que eu precise
    // invocar: evt.target.dataset.idtel
    // imgDelTel.innerHTML = evt.target.value
    imgDelTel.addEventListener('click', (evt) => {
      // console.log(evt.target)
      // console.log(evt.target.parentNode)
      evt.target.parentNode.remove()
    })

    divTel.appendChild(imgDelTel)
    telefones.appendChild(divTel)
}

const endpoint_todosColaboradores = 'http://localhost:3000/colaboradores'
fetch(endpoint_todosColaboradores)
.then(res => res.json())
.then(res => {
  // console.log(res)
  dadosGrid.innerHTML = ''
  res.forEach(el => {
    const divLinha = document.createElement('div')
    divLinha.setAttribute('class', 'linhaGrid')

    const divC1 = document.createElement('div')
    divC1.setAttribute('class', 'colunaLinhaGrid c1')
    divC1.innerHTML = el.id
    divLinha.appendChild(divC1)

    const divC2 = document.createElement('div')
    divC2.setAttribute('class', 'colunaLinhaGrid c2')
    divC2.innerHTML = el.nome
    divLinha.appendChild(divC2)

    const divC3 = document.createElement('div')
    divC3.setAttribute('class', 'colunaLinhaGrid c3')
    divC3.innerHTML = el.tipo
    divLinha.appendChild(divC3)

    const divC4 = document.createElement('div')
    divC4.setAttribute('class', 'colunaLinhaGrid c4')
    divC4.innerHTML = el.status
    divLinha.appendChild(divC4)

    const divC5 = document.createElement('div')
    divC5.setAttribute('class', 'colunaLinhaGrid c5')
    divLinha.appendChild(divC5)

    // const img_status = document.createElement('img')
    // img_status.setAttribute('src','../../imgs/toggle_on.svg')
    // img_status.setAttribute('class', 'icone_op')
    // divC5.appendChild(img_status)

    const img_editar = document.createElement('img')
    img_editar.setAttribute('src','../../imgs/editar.svg')
    img_editar.setAttribute('class', 'icone_op')
    img_editar.addEventListener('click', (evt) => {
      const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
      console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)
      modoJanela = 'e'
      document.getElementById('tituloPopup').innerHTML = "Editar Colaborador"
      const tels = [...document.querySelectorAll(".numTel")];
      let numTels = []
      tels.forEach(t => {
        numTels.push(t.innerHTML)
      })
      const endpoint = `http://localhost:3000/colaboradores/${id}`
      fetch(endpoint)
        .then(res => res.json())
        .then(res => {
          console.log(res, 'res')
          f_id.value = res.id
          f_nome.value = res.nome
          f_tipoColab.value = res.tipo
          f_status.value = res.status
          img_foto.src = res.foto_usuario
          telefones.innerHTML = "";
          res.telefones.map((el) => {
            criarCxTelefone(el)
          })
          novoColaborador.classList.remove('ocultarPopup')
        })

    })
    divC5.appendChild(img_editar)

    const img_remover = document.createElement('img')
    img_remover.setAttribute('src','../../imgs/deletar.svg')
    img_remover.setAttribute('class', 'icone_op')
    divC5.appendChild(img_remover)

    dadosGrid.appendChild(divLinha)
  });
})

const endpoint_tiposColaboradores = 'http://localhost:3000/Tipos'

fetch(endpoint_tiposColaboradores)
.then(res => res.json())
.then(res => {
  f_tipoColab.innerHTML = '';
  res.forEach(e => {
    console.log(res)
    const opt = document.createElement("option")
    opt.setAttribute("value", e.id)
    opt.innerHTML = e.tipo
    f_tipoColab.appendChild(opt)
  })
})

btn_add.addEventListener('click', (evt) => {
  console.log(f_nome)
  modoJanela = 'n'
  novoColaborador.classList.remove('ocultarPopup')
  document.getElementById('tituloPopup').innerHTML = "Novo Colaborador"
})

btn_fecharPopup.addEventListener('click', (evt) => {
  novoColaborador.classList.add('ocultarPopup')
})

btn_gravarPopup.addEventListener('click', (evt) => {
  const tels = [...document.querySelectorAll(".numTel")];
  // console.log(tels)
  let numTels = []
  tels.forEach(t => {
    numTels.push(t.innerHTML)
  })
  // console.log(numTels)

  const dados = {
    nome: f_nome.value,
    tipo: f_tipoColab.value,
    status: f_status.value,
    telefones:numTels,
    foto_usuario: img_foto.getAttribute('src')
  }
  if(modoJanela == 'n'){
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados)
  }
  const endpoint = 'http://localhost:3000/colaboradores'
    fetch(endpoint, options)
    .then(res => {
      if(res.status == 201) {
        alert("Gravação de novo colaborador com sucesso!")
        f_nome.value = '';
        f_tipoColab.value = '';
        f_status.value = '';
        f_foto.value = '';
        img_foto.setAttribute('src', '#')
        telefones.innerHTML = '';
  
      } else {
        alert('Erro ao gravar novo contato')
      }
    })
  } else {
    // console.log(evt.target.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].value)
    const id = evt.target.parentNode.parentNode.childNodes[3].childNodes[1].childNodes[3].value
    const options = {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados)
  }
  const endpoint = `http://localhost:3000/colaboradores/${id}`
    fetch(endpoint, options)
    .then(res => {
      if(res.status == 200) {
        alert("Edição do colaborador feita com sucesso!")
        f_nome.value = '';
        f_tipoColab.value = '';
        f_status.value = '';
        f_foto.value = '';
        img_foto.setAttribute('src', '#')
        telefones.innerHTML = '';
  
      } else {
        alert('Erro ao gravar novo contato')
      }
    })
  }
  

  novoColaborador.classList.add('ocultarPopup')
})

btn_cancelarPopup.addEventListener('click', (evt) => {
  novoColaborador.classList.add('ocultarPopup')
})

f_telefone.addEventListener('keyup', (evt) => {
  if(evt.key == "Enter"){
    if(evt.target.value.length >= 8) {
      criarCxTelefone(evt.target.value)

    evt.target.value = ''
    } else {
      alert('Número de telefone inválido')
    }
    
  }
})

const converte_image_b64 = (localDestino, arquivoimg) => {
  const obj = arquivoimg
  const reader = new FileReader()
  reader.addEventListener("load", (evt) => {
    const res = reader.result;
    localDestino.src = res
  })
  if(obj){
    reader.readAsDataURL(obj)
  }
}

f_foto.addEventListener('change', (evt) => {
  console.log(evt.target)
  converte_image_b64(img_foto, evt.target.files[0])
})
