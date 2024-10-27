import { useDispatch, useSelector } from 'react-redux'
import FiltroCartao from '../../componentes/filtroCard'
import * as E from './styles'
import { Botao, Campo } from '../../globais'
import { RootReducer } from '../../store'
import { AlterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../globais/enums'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  // cria um despacho de uma acao p/ atualizar estado
  const dispatch = useDispatch()

  // retorna o valor digitado no estado filtro
  const { termo } = useSelector((estado: RootReducer) => estado.filtro)

  // cria navegacao react
  const navega = useNavigate()

  return (
    <E.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(AlterarTermo(e.target.value))}
            />
            <E.Filtros>
              <FiltroCartao
                criterio="status"
                legenda="pendentes"
                valor={enums.EStatus.PENDENTE}
              ></FiltroCartao>
              <FiltroCartao
                criterio="status"
                legenda="concluidas"
                valor={enums.EStatus.CONCLUIDO}
              ></FiltroCartao>
              <FiltroCartao
                criterio="prioridade"
                legenda="urgentes"
                valor={enums.EPrioridade.URGENTE}
              ></FiltroCartao>
              <FiltroCartao
                criterio="prioridade"
                legenda="importantes"
                valor={enums.EPrioridade.IMPORTANTE}
              ></FiltroCartao>
              <FiltroCartao
                criterio="prioridade"
                legenda="normal"
                valor={enums.EPrioridade.NORMAL}
              ></FiltroCartao>
              <FiltroCartao criterio="todas" legenda="todas"></FiltroCartao>
            </E.Filtros>
          </>
        ) : (
          <Botao type="button" onClick={() => navega('/')}>
            Voltar a lista de tarefas
          </Botao>
        )}
      </div>
    </E.Aside>
  )
}

export default BarraLateral
