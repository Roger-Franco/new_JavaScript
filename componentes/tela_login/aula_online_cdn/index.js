// import { Login } from './login.js';
import {Cxmsg} from '../../caixa_mensagem/caixa_msg_pers_2_botoes/cxmsg.js'

const callback_ok = () => {
  // alert('Ok')
}

const callback_nao_ok = () => {
  const config = {
    cor: "#800",
    tipo: "ok",
    textos: null,
    comando_sn: null,
  }
  Cxmsg.mostrar(config, "Erro", "Login não efetuado! Usuário ou Senha incorretos.")
  // alert('Não Ok')

}

Login.login(callback_ok, callback_nao_ok)
