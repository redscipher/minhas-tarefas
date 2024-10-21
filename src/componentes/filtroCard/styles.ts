import styled from 'styled-components'

// importa tipos
import { Props } from '.'

// cria um subtipo baseado em um outro tipo de dados: p/ omitir propriedades que nao precisamos
// sintaxe: Omit<nome_type, 'propriedades_emissao'>
// type PropsSimplificado = Omit<Props, 'contador' | 'legenda' | 'criterio'>
type PropsSimplificado = Pick<Props, 'ativo'>

// passa entre '<>' as propriedades acessiveis dentro do objeto
const Cartao = styled.div<PropsSimplificado>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#1e90ff' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#fff' : '#fcfcfc')};
  color: ${(props) => (props.ativo ? '#1e90ff' : '#5e5e5e')};
  border-radius: 8px;
`

const Contador = styled.div`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

const Rotulo = styled.div`
  font-size: 14px;
`

export { Cartao, Contador, Rotulo }
