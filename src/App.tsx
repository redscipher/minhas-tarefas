import BarraLateral from './containers/barraLateral'
import ListaTarefas from './containers/listaDeTarefas'
import EstiloGlobal, { Container } from './globais'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <BarraLateral></BarraLateral>
        <ListaTarefas></ListaTarefas>
      </Container>
    </>
  )
}

export default App
