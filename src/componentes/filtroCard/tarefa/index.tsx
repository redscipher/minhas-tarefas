import { useState } from 'react'
import * as E from './styles'
import * as enums from '../../../globais/enums'

export type PropsTarefa = {
  titulo: string
  prioridade: enums.EPrioridade
  status: enums.EStatus
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: PropsTarefa) => {
  // cria constante p/ controlar um estado dinamicamente
  const [estaEditando, setEstaEditando] = useState(false)

  // retorno
  return (
    <E.Cartao>
      <E.Titulo>{titulo}</E.Titulo>
      <E.Ponto parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </E.Ponto>
      <E.Ponto parametro="status" status={status}>
        {status}
      </E.Ponto>
      <E.Descricao value={descricao}></E.Descricao>
      <E.BarraAcoes>
        {/* controle de renderizacao: if */}
        {estaEditando ? (
          <>
            <E.BotaoSalvar>Salvar</E.BotaoSalvar>
            <E.BotaoCancelar onClick={() => setEstaEditando(false)}>
              Cancelar
            </E.BotaoCancelar>
          </>
        ) : (
          <>
            <E.Botao onClick={() => setEstaEditando(true)}>Editar</E.Botao>
            <E.BotaoCancelar>Remover</E.BotaoCancelar>
          </>
        )}
      </E.BarraAcoes>
    </E.Cartao>
  )
}

export default Tarefa
