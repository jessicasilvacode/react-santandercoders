import { useEffect, useState } from "react"
// import MeuComponente from "./componentes/MeuComponente"
// import MinhaLista from "./componentes/MinhaLista"
// import MEuContador from "./MeuContador"

// function App() {
//   return (
//     <div>
//       <h1>Olá, mundo React!</h1>
//       <MeuComponente></MeuComponente>
//       <MeuBotao conteudo='me clique'> </MeuBotao>
//       <MeuBotao conteudo='depois aqui'> </MeuBotao>
//       <MeuBotao conteudo='e por fim, aqui'> </MeuBotao>
//     </div>
//   )
// }

// function MeuBotao(props) {
//   console.log()
//   return (
//     <button>{props.conteudo}</button>
//   )
// }

// function App() {
//   return (
//     <div>
//       <MEuContador> </MEuContador>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <h3>Listas:</h3>
//       <MinhaLista> </MinhaLista>
//     </div>
//   )
// }

const tarefas = [
  {id: '1', title: 'primeira tarefa:  '},
  {id: '2', title: 'segunda tarefa: '},
  {id: '3', title: 'terceira tarefa: '},
  {id: '4', title: 'quarta tarefa:  '},
]

export default function App() {

  const [tarefas, setTarefas] = useState([]) 

  useEffect(( ) => {

    async function buscarDados() {
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      const resultadoFinal = await resultado.json() 
      return resultadoFinal
    }

    buscarDados().then(res => setTarefas(res))

  }, [])

  return (
    <div className="container">
      <h3>PROJETO: lista de tarefas</h3>
      <ol>
      {tarefas.map((tarefa) => {
        return (
          <div>
            <li key={tarefa.id}>{tarefa.title}
            {tarefa.completed ?  ' / OK!' : null}</li>
          </div>
        )
      })}

      </ol>
    </div>
    
  )
}

