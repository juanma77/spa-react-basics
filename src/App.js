import React from 'react';
import './App.css';

function HelloWorldComponent(props){
  return (
  <div id="hello-world-component">
    <h3>{ props.subtitle }</h3>  
    <p>{ props.mytext }</p>
  </div> 
  );
}

// Este componente App es el padre; aquí mandamos props o propiedades, en este en particular usamos "mytext" y "subtitle", y ya que la enviamos como propiedad desde el componente hijo que está incrustado en el padre, debemos de recibir esos props en el componente hijo
function App() {
  return (
    <div>
      This is my new component using normal function: <HelloWorldComponent mytext="Hello John" subtitle="Subtitle 1"/>
      <HelloWorldComponent mytext="Hello All" subtitle="Subtitle 2"/>
      <HelloWorldComponent mytext="Hello to You!" subtitle="Subtitle 3"/>
    </div>
  );
}

export default App;
