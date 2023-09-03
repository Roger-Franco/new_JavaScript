const btn_imp = document.getElementById('btn_imp')

let estilo = "<style>"
  estilo += "table {width: 100%; font: 25px Calibri;}";
  estilo += "table, th, td {border: 2px solid #888; border-collapse: collapse;";
  estilo += "padding: 4px 8px; text-align: center;}";
  estilo += "</style>"

btn_imp.addEventListener('click', (evt) => {
  // window.print() // Resolveria, mas imprimiria a tela, sem formatação nenhuma;

  const conteudo = document.getElementById('tabela').innerHTML

  // let estilo = "<style>"
  // estilo += "table {width: 100%; font: 25px Calibri;}";
  // estilo += "table, th, td {border: 2px solid #888; border-collapse: collapse;";
  // estilo += "padding: 4px 8px; text-align: center;}";
  // estilo += "</style>"

  // const win = window.open('', '', 'height=700,width=700');
  const win = window.open();

  // var myWindow = window.open("", "", "width=200,height=100")

  // win.document.write('Qualquer coisa')
  // win.document.write('<html><head>');
  // win.document.write('<title>Frank Cursos</title>');
  // win.document.write(estilo);
  // console.log(window.document.write(estilo))
  // win.document.write('</head>');
  // win.document.write('<body>');
  // win.document.write(conteudo);
  // win.document.write('</body></html>');

  win.print()
  // win.close()
})