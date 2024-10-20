import FiltroCartao from '../../componentes/filtroCard'
import * as E from './styles'

const BarraLateral = () => (
  <E.Aside>
    <div>
      <E.Campo type="text" placeholder="Buscar" />
      <E.Filtros>
        <FiltroCartao contador={0} legenda="pendentes"></FiltroCartao>
        <FiltroCartao contador={0} legenda="concluidas"></FiltroCartao>
        <FiltroCartao contador={0} legenda="urgentes"></FiltroCartao>
        <FiltroCartao contador={0} legenda="importantes"></FiltroCartao>
        <FiltroCartao contador={0} legenda="normal"></FiltroCartao>
        <FiltroCartao ativo={true} contador={0} legenda="todas"></FiltroCartao>
      </E.Filtros>
    </div>
  </E.Aside>
)

export default BarraLateral
