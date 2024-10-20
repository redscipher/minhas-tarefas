// importacao do componente que cria estilos p/ pagina
import styled, { createGlobalStyle } from 'styled-components'

// estilo
const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Robot, sans-serif;
  list-style: none;
}
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

// exportacao
export default EstiloGlobal
export { Container }
