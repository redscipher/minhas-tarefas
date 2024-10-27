import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../modelos/Tarefa'
import * as enums from '../../globais/enums'

// tipo
type TarefasEstado = {
  itens: Tarefa[]
}

// inicia objeto
const initialState: TarefasEstado = {
  itens: [
    {
      titulo: 'Estudar Typescript',
      prioridade: enums.EPrioridade.IMPORTANTE,
      estado: enums.EStatus.PENDENTE,
      descricao: 'Assistir aula 4 EBAC',
      id: 1
    },
    {
      titulo: 'Estudar React',
      prioridade: enums.EPrioridade.URGENTE,
      estado: enums.EStatus.CONCLUIDO,
      descricao: 'Assistir aula 3 EBAC',
      id: 2
    },
    {
      titulo: 'Estudar Redux',
      prioridade: enums.EPrioridade.NORMAL,
      estado: enums.EStatus.PENDENTE,
      descricao: 'Assistir aula 5 EBAC',
      id: 3
    }
  ]
}

// cria uma fatia p/ controlar estados de um objeto
const tarefasSlice = createSlice({
  name: 'tarefas', // nome da tarefa
  initialState,
  // redutores: acoes
  reducers: {
    // nome_acao: (funcao) => receber o estado atual + acao sendo realizada
    // acao realizada, o valor passado pode ser acessado pelo atributo 'payload'
    // que retorna um objeto to tipo passada entre '<>'
    remover: (estado, acao: PayloadAction<number>) => {
      estado.itens = [
        ...estado.itens.filter((tarefa) => tarefa.id !== acao.payload)
      ]
    },
    editar: (estado, acao: PayloadAction<Tarefa>) => {
      // busca indice do registro selecionado
      const idxTarefa = estado.itens.findIndex((t) => (t.id = acao.payload.id))
      // salva valor passado no item do indice encontrado
      if (idxTarefa >= 0) {
        estado.itens[idxTarefa] = acao.payload
      }
    },
    cadastra: (estado, acao: PayloadAction<Omit<Tarefa, 'id'>>) => {
      // busca na lista de tarefas existe se ja existe alguma tarefa com o titulo = ao que foi passado p/ acao do armazem
      const TarefaExiste = estado.itens.find(
        (tarefa) =>
          tarefa.titulo.toLocaleLowerCase() ===
          acao.payload.titulo.toLocaleLowerCase()
      )

      if (TarefaExiste) {
        alert('Tarefa ja existe')
      } else {
        const ultimaTarefa = estado.itens[estado.itens.length - 1]
        const tarefaNova = {
          ...acao.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        estado.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      estado,
      acao: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      // busca indice do registro selecionado
      const idxTarefa = estado.itens.findIndex((t) => t.id === acao.payload.id)
      // salva valor passado no item do indice encontrado
      if (idxTarefa >= 0) {
        estado.itens[idxTarefa].estado = acao.payload.finalizado
          ? enums.EStatus.CONCLUIDO
          : enums.EStatus.PENDENTE
      }
    }
  }
})

// exportacoes
// acoes: reducers
export const { remover, editar, cadastra, alteraStatus } = tarefasSlice.actions
// reducer
export default tarefasSlice.reducer
