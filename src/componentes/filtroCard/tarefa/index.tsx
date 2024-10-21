import { useState } from 'react'
import * as E from './styles'
// import * as enums from '../../../globais/enums'
import { useDispatch } from 'react-redux'
// importa o redutor
import { remover } from '../../../store/reducers/tarefas'
import ClsTarefa from '../../../modelos/Tarefa'

export type PropsTarefa = ClsTarefa

const Tarefa = ({ titulo, prioridade, estado, descricao, id }: PropsTarefa) => {
  // cria constante p/ controlar um estado dinamicamente
  const [estaEditando, setEstaEditando] = useState(false)
  // cria o 'dispatch' que manda a informacao da mudanca de estado p/ a 'store'
  const dispatch = useDispatch()

  // retorno
  return (
    <E.Cartao>
      <E.Titulo>{titulo}</E.Titulo>
      <E.Ponto parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </E.Ponto>
      <E.Ponto parametro="status" status={estado}>
        {estado}
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
            <E.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </E.BotaoCancelar>
          </>
        )}
      </E.BarraAcoes>
    </E.Cartao>
  )
}

export default Tarefa
