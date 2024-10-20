import styled from 'styled-components'

const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`

const Campo = styled.input`
  color: #666666;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  font-weight: bold;
  border-color: #666666;
  width: 100%;
`

export { Aside, Filtros, Campo }
