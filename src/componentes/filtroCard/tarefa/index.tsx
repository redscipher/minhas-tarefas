import { useEffect, useState } from 'react'
import * as E from './styles'
// import * as enums from '../../../globais/enums'
import { useDispatch } from 'react-redux'
// importa o redutor
import { remover, editar } from '../../../store/reducers/tarefas'
import ClsTarefa from '../../../modelos/Tarefa'

export type PropsTarefa = ClsTarefa

const Tarefa = ({ titulo, prioridade, estado, descricao, id }: PropsTarefa) => {
  // cria constante p/ controlar um estado dinamicamente
  const [estaEditando, setEstaEditando] = useState(false)
  const [descAreaTexto, setDescAreaTexto] = useState(descricao)
  // cria um efeito p/ preencher as descricoes dos textAreas com os valores passados nos props
  useEffect(() => {
    if (descricao.length > 0) setDescAreaTexto(descricao)
  }, [descricao])
  // cria o 'dispatch' que manda a informacao da mudanca de estado p/ a 'store'
  const dispatch = useDispatch()

  // funcoes
  function CancelarEdicao() {
    setEstaEditando(false)
    setDescAreaTexto(descricao)
  }

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
      <E.Descricao
        disabled={!estaEditando}
        value={descAreaTexto}
        onChange={(e) => setDescAreaTexto(e.target.value)}
      ></E.Descricao>
      <E.BarraAcoes>
        {/* controle de renderizacao: if */}
        {estaEditando ? (
          <>
            <E.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    prioridade,
                    estado,
                    id,
                    titulo
                  })
                )
              }}
            >
              Salvar
            </E.BotaoSalvar>
            <E.BotaoCancelar onClick={CancelarEdicao}>Cancelar</E.BotaoCancelar>
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
