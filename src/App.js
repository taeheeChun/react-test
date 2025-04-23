import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import Info from "./Components/Info";
import NewInfo from "./Components/NewInfo";
import ContextSample from "./Components/ContextSample";
import NewCounter from "./Components/NewCounter";
import Average from "./Components/Average";
function App() {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };

  return (
    <div className="App">
      {/*<header className="App-header">*/}

      {/*</header>*/}
      <Counter />
      <Button text="text23" onClick={handleClick}/>
      <Info/>
      <ContextSample/>
      <NewCounter/>
      <NewInfo/>
      <Average/>
    </div>
  );
}

export default App;
