import { Provider } from 'react-redux'
import BarraLateral from './containers/barraLateral'
import ListaTarefas from './containers/listaDeTarefas'
import EstiloGlobal, { Container } from './globais'
import armazem from './store/index'

function App() {
  return (
    <Provider store={armazem}>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <BarraLateral></BarraLateral>
        <ListaTarefas></ListaTarefas>
      </Container>
    </Provider>
  )
}

export default App
