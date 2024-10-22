import { Provider } from 'react-redux'
import EstiloGlobal, { Container } from './globais'
import armazem from './store/index'

// importacoes roteador
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicial from './paginas/'
import Cadastro from './paginas/cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Inicial></Inicial>
  },
  {
    path: '/cadastro',
    element: <Cadastro></Cadastro>
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
