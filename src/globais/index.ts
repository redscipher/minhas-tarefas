// importacao do componente que cria estilos p/ pagina
import styled, { createGlobalStyle } from 'styled-components'
import cores from './cores'

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

const ContainerTarefas = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

const Campo = styled.input`
  color: #666666;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  border-color: #666666;
  width: 100%;
`

const Botao = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${cores.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

const BotaoSalvar = styled(Botao)`
  background-color: ${cores.verde};
`

// exportacao
export default EstiloGlobal
export { Container, ContainerTarefas, Titulo, Campo, Botao, BotaoSalvar }
