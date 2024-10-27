import { ChangeEvent, useEffect, useState } from 'react'
import * as E from './styles'
// import * as enums from '../../../globais/enums'
import { useDispatch } from 'react-redux'
// importa o redutor
import { remover, editar, alteraStatus } from '../../../store/reducers/tarefas'
import ClsTarefa from '../../../modelos/Tarefa'
import { Botao, BotaoSalvar } from '../../../globais'
import * as enums from '../../../globais/enums'

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

  function alteraStatusTarefa(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(alteraStatus({ id, finalizado: evento.target.checked }))
  }

  // retorno
  return (
    <E.Cartao>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={estado === enums.EStatus.CONCLUIDO}
          id={titulo}
          onChange={alteraStatusTarefa}
        />
        <E.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </E.Titulo>
      </label>
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
            <BotaoSalvar
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
            </BotaoSalvar>
            <E.BotaoCancelar onClick={CancelarEdicao}>Cancelar</E.BotaoCancelar>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
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
