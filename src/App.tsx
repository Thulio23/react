import {useState} from "react";
import{} from "./components/list"

function App(){
  const [projects, setProjects] = useState([])
  function handleAddProject() {
    setProjects([...projects,`Novo projeto ${Date.now()}`])
  }
    return (
    <>
      <header>🔴⚫Flamengo🔴⚫</header>
      <main>
        <ul>
        {projects.map(item => <li key={item}>{item}</li>)}
      </ul>
    </main>
    </>
  );
}

export default App
