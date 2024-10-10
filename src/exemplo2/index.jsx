import { useEffect, useState } from "react";

export default function App() {
  
  const [buscarUsuario,setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {

        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados =await resposta.json();                
        setUsuario(dados);
    }

    buscarUsuario();
  }, []);
  //complete o código;

  return (
    <>
      <h1>Galeria de Fotos</h1>
      <ul>
        {buscarUsuario.map(buscarUsuario =>(
          <li key= {buscarUsuario.userId}>
            <h2>{buscarUsuario.title}</h2>
          </li>

    
        ))}
      </ul>
    </>
  );
}
