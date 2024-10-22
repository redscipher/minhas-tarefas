import { useDispatch, useSelector } from 'react-redux'
import FiltroCartao from '../../componentes/filtroCard'
import * as E from './styles'
import { RootReducer } from '../../store'
import { AlterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../globais/enums'

const BarraLateral = () => {
  // cria um despacho de uma acao p/ atualizar estado
  const dispatch = useDispatch()

  // retorna o valor digitado no estado filtro
  const { termo } = useSelector((estado: RootReducer) => estado.filtro)

  return (
    <E.Aside>
      <div>
        <E.Campo
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
      </div>
    </E.Aside>
  )
}

export default BarraLateral
