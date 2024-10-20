// import { useState } from 'react'
import Tarefa from '../../componentes/filtroCard/tarefa' //{ PropsTarefa }
import { ContainerTarefas } from './styles'
// import * as enums from '../../globais/enums'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

/* eslint-disable react/no-unescaped-entities */
const ListaTarefas = () => {
  // cria um vetor de objetos vazio do tipo 'PropsTarefa'
  //let itensTarefasFixa: PropsTarefa[] = []
  // sintaxe: let/const [nome, setNome] = useState<tipo/tipo[]>()/([])
  //const [itensTarefas, setItensTarefas] = useState<PropsTarefa[]>([])

  // // validacao p/ adicionar itens de tarefas
  // if (itensTarefas.length === 0) {
  //   // cria tarefas
  //   const itens: PropsTarefa[] = [
  //     {
  //       descricao: 'Assistar aula 3 da EBAC',
  //       prioridade: enums.EPrioridade.IMPORTANTE,
  //       status: enums.EStatus.PENDENTE,
  //       titulo: 'Estudar TypeScript'
  //     },
  //     {
  //       descricao: 'Assistar aula 4 da EBAC',
  //       prioridade: enums.EPrioridade.URGENTE,
  //       status: enums.EStatus.CONCLUIDO,
  //       titulo: 'Estudar React com Redux'
  //     },
  //     {
  //       descricao: 'Assistar aula 10 da EBAC',
  //       prioridade: enums.EPrioridade.NORMAL,
  //       status: enums.EStatus.PENDENTE,
  //       titulo: 'Estudar JavaScript'
  //     }
  //   ]
  //   // preenche vetor vazio
  //   setItensTarefas(itens)
  // }

  // utilizando o 'seletor' do 'redux'
  // buscando as tarefas sem desestruturar
  //const tarefas = useSelector((estado: RootReducer) => estado.tarefas)
  // busca as tarefas desestruturando
  const { tarefas } = useSelector((estado: RootReducer) => estado)

  return (
    <ContainerTarefas>
      {tarefas.length > 0 && (
        <>
          <p>2 tarefas marcadas como: "categoria" e "termo"</p>
          <ul>
            {/* renderiza os itens em loop */}
            {tarefas.map((itemTarefa, i) => (
              // cria um item passando um ID como 'chave'
              <li key={i + ' - ' + itemTarefa.titulo}>
                {/* tarefa atual */}
                <Tarefa
                  descricao={itemTarefa.descricao}
                  prioridade={itemTarefa.prioridade}
                  status={itemTarefa.estado}
                  titulo={itemTarefa.titulo}
                ></Tarefa>
              </li>
            ))}
          </ul>
        </>
      )}
    </ContainerTarefas>
  )
}

export default ListaTarefas
