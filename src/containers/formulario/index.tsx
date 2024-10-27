import { useDispatch } from 'react-redux'
import { ContainerTarefas, Titulo, Campo, BotaoSalvar } from '../../globais'
import { Form, Opcoes, Opcao } from './styles'
import { FormEvent, useState } from 'react'
import * as enums from '../../globais/enums'
import { cadastra } from '../../store/reducers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  // estados
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.EPrioridade.NORMAL)
  // cria navegacao react
  const navega = useNavigate()

  // despacho
  const dispatch = useDispatch()

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastra({
        titulo,
        prioridade,
        descricao,
        estado: enums.EStatus.PENDENTE
      })
    )
    navega('/')
  }

  return (
    <ContainerTarefas>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo}
          type="text"
          placeholder="Titulo"
          onChange={(evento) => setTitulo(evento.target.value)}
        />
        <Campo
          as="textarea"
          placeholder="Descricao da tarefa"
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
        ></Campo>
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.EPrioridade).map((item) => (
            <Opcao key={item}>
              <input
                type="radio"
                name="prioridade"
                value={item}
                id={item}
                defaultChecked={item === enums.EPrioridade.NORMAL}
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.EPrioridade)
                }
              />
              <label htmlFor={item}>{item}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </ContainerTarefas>
  )
}

export default Formulario
