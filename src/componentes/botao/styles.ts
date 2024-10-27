import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cores from '../../globais/cores'

const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: ${cores.verde};
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
export { Circulo }
