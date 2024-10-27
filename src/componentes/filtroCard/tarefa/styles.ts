import styled from 'styled-components'
import * as enums from '../../../globais/enums'
import cores from '../../../globais/cores'
import { Botao } from '../../../globais'

// tipos
type PropsPonto = {
  prioridade?: string
  status?: string
  parametro?: 'status' | 'prioridade'
}

// funcoes
function retornaCorFundo(props: PropsPonto): string {
  if (props.parametro === 'status') {
    if (props.status === enums.EStatus.PENDENTE) return cores.amarelo
    if (props.status === enums.EStatus.CONCLUIDO) return cores.verde
  } else {
    if (props.prioridade === enums.EPrioridade.URGENTE) return cores.vermelho
    if (props.prioridade === enums.EPrioridade.IMPORTANTE) return cores.amarelo2
  }
  return '#ccc'
}

// constantes css
const Cartao = styled.div`
  background-color: ##fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

const Ponto = styled.span<PropsPonto>`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => retornaCorFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;e
`

const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

const BotaoCancelar = styled(Botao)`
  background-color: ${cores.vermelho};
`

// exporta botoes
export { Cartao, Titulo, Ponto, Descricao, BarraAcoes, BotaoCancelar }
