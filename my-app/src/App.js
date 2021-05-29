
function App() {
  let count = 0
  const addCount=()=>{
    count=count+1
  }
  return (
    <div>
      <button onClick={addCount}>click</button>
      <h1>counter {{count}}</h1>
      <p>hi</p>

    </div>
    
  );
}

export default App;

