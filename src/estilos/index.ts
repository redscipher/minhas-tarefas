// importacao do componente que cria estilos p/ pagina
import { createGlobalStyle } from 'styled-components'

// estilo
const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Robot, sans-serif;
}
`

// exportacao
export default EstiloGlobal
