import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0]);
         //complete o código
    }
     buscarUsuario();//complete o código
  }, []);

  return (
    <>
    <h1>Usuário</h1>
    <ul>
          <li>
          <p>{usuario?.name.title}</p>
            <p>{usuario?.name.firts}</p>
            <p>{usuario?.name.last}</p>
            <p>usuario?.location.street</p>
            <p>usuario?.location.number</p>
            <p>usuario?.location.name</p>
          </li>
    </ul>
    </>
  );
}
