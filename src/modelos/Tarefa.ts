import * as enums from '../globais/enums'

class Tarefa {
  titulo: string
  prioridade: enums.EPrioridade
  estado: enums.EStatus
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.EPrioridade,
    estado: enums.EStatus,
    descricao: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.estado = estado
    this.descricao = descricao
    this.id = id
  }
}

export default Tarefa
