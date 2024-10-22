import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../globais/enums'

type FiltroEstado = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.EPrioridade | enums.EStatus
}

const initialState: FiltroEstado = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  // redutores: acoes
  reducers: {
    // nome_acao: (funcao) => receber o estado atual + acao sendo realizada
    // acao realizada, o valor passado pode ser acessado pelo atributo 'payload'
    // que retorna um objeto to tipo passada entre '<>'
    AlterarTermo: (estado, acao: PayloadAction<string>) => {
      estado.termo = acao.payload
    },
    AlterarFiltro: (estado, acao: PayloadAction<FiltroEstado>) => {
      estado.criterio = acao.payload.criterio
      estado.valor = acao.payload.valor
    }
  }
})

// exportacao acoes
export const { AlterarTermo, AlterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
