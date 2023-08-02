import Card from "./card";

function App(){
  const count = 10;
  const e = 1029;
  return (
      <div className ="myclass">
          <h1>Welcome To React JS !!</h1>
          <p>Hello World!!</p>
          <button>Click</button>
          <h1>Count:{count+5}</h1>
          <p>absh{e}@gmail.com</p>
          <Card/>
      </div>
  );
}

export default App;