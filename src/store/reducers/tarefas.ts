import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../modelos/Tarefa'
import * as enums from '../../globais/enums'

// cria uma fatia p/ controlar estados de um objeto
const tarefasSlice = createSlice({
  name: 'tarefas', // nome da tarefa
  initialState: [
    new Tarefa(
      'Estudar Typescript',
      enums.EPrioridade.IMPORTANTE,
      enums.EStatus.PENDENTE,
      'Assistir aula 4 EBAC',
      1
    ),
    new Tarefa(
      'Estudar React',
      enums.EPrioridade.URGENTE,
      enums.EStatus.CONCLUIDO,
      'Assistir aula 3 EBAC',
      2
    ),
    new Tarefa(
      'Estudar Redux',
      enums.EPrioridade.NORMAL,
      enums.EStatus.PENDENTE,
      'Assistir aula 5 EBAC',
      3
    )
  ],
  // redutores: acoes
  reducers: {
    // nome_acao: (funcao) => receber o estado atual + acao sendo realizada
    // acao realizada, o valor passado pode ser acessado pelo atributo 'payload'
    // que retorna um objeto to tipo passada entre '<>'
    remover: (estado, acao: PayloadAction<number>) => {
      estado = estado.filter((tarefa) => tarefa.id !== acao.payload)
    }
  }
})

// exportacoes
// acoes: reducers
export const { remover } = tarefasSlice.actions
// reducer
export default tarefasSlice.reducer
