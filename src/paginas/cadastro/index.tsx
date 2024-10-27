import BarraLateral from '../../containers/barraLateral'
import Formulario from '../../containers/formulario'

const Cadastro = () => {
  return (
    <>
      {/* barra lateral */}
      <BarraLateral mostrarFiltros={false}></BarraLateral>
      <Formulario></Formulario>
    </>
  )
}

export default Cadastro
