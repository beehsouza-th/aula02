import { useEffect, useState } from "react";

export default function App() {
  
  const [buscarUsuario,setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
<<<<<<< HEAD
        const resposta = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados =await resposta.json();                ;
        setUsuario(dados);
=======
                    = await fetch('https://jsonplaceholder.typicode.com/photos');
        const dados =                ;
        setFotos(dados);
>>>>>>> 18c815f3d812934700f948d50632a28be1721a3a
    }
    buscarUsuario();
  }, []);
  //complete o código);

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
