import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './globais'
import armazem from './store/index'

// importacoes roteador
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicial from './paginas/'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Inicial></Inicial>
  },
  {
    path: '/novo',
    element: <h1>Nova tarefa</h1>
  }
])

function App() {
  return (
    <Provider store={armazem}>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <RouterProvider router={rotas}></RouterProvider>
      </Container>
    </Provider>
  )
}

export default App
