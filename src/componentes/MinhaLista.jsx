import { useState } from "react"

const minhaLista = [
    { id: '1', value: 'Frutas'},
    { id: '2', value: 'Legumes'},
    { id: '3', value: 'Carnes'},
    { id: '4', value: 'Grãos'},
    { id: '5', value: 'Doces'},
]

export default function MinhaLista() {

    const [produtos, setProdutos] = useState(minhaLista)

    return minhaLista.map( (item) => {
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )

    } )

}

