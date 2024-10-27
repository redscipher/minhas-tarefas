import BotaoAdicionar from '../componentes/botao'
import BarraLateral from '../containers/barraLateral'
import ListaTarefas from '../containers/listaDeTarefas'

const Inicial = () => {
  return (
    <>
      <BarraLateral mostrarFiltros></BarraLateral>
      <ListaTarefas></ListaTarefas>
      <BotaoAdicionar></BotaoAdicionar>
    </>
  )
}

export default Inicial
