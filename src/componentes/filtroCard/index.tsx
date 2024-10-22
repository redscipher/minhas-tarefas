import { useDispatch, useSelector } from 'react-redux'
import * as E from './styles'
import { AlterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../globais/enums'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.EPrioridade | enums.EStatus
}

// cria as propriedades como parametros
const FiltroCartao = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  // busca o valor do estado
  const { filtro, tarefas } = useSelector((estado: RootReducer) => estado)

  const verificaEstaAtivo = () => {
    const mesmoCrit = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor
    // def retorno
    return mesmoCrit && mesmoValor
  }

  const filtrar = () => {
    dispatch(
      AlterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade')
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    if (criterio === 'status')
      return tarefas.itens.filter((item) => item.estado === valor).length
  }

  const ativo = verificaEstaAtivo()

  const contador = contarTarefas()

  return (
    <E.Cartao ativo={ativo} onClick={filtrar}>
      <E.Contador>{contador}</E.Contador>
      <E.Rotulo>{legenda}</E.Rotulo>
    </E.Cartao>
  )
}

export default FiltroCartao
