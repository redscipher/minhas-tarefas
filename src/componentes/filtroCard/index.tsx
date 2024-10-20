import * as E from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

// cria as propriedades como parametros
const FiltroCartao = ({ ativo, contador, legenda }: Props) => (
  <E.Cartao ativo={ativo}>
    <E.Contador>{contador}</E.Contador>
    <E.Rotulo>{legenda}</E.Rotulo>
  </E.Cartao>
)

export default FiltroCartao
