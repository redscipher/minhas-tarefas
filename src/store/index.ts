import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './reducers/tarefas'

// configura o 'store' que eh o responsavel pelo controle de estados
const armazem = configureStore({
  reducer: {
    // nome_reducer: reducer_importado =>> acao
    tarefas: tarefasReducer
  }
})

export default armazem

export type RootReducer = ReturnType<typeof armazem.getState>
