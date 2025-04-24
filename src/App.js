import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";
import Counter from "./Components/Counter";
import Info from "./Components/Info";
import NewInfo from "./Components/NewInfo";
import ContextSample from "./Components/ContextSample";
import NewCounter from "./Components/NewCounter";
import Average from "./Components/Average";

import { BrowserRouter, Routes, Route, Link, Outlet, useParams, useNavigate } from "react-router";

function App() {
  const handleClick = () => {
    alert('버튼이 클릭되었습니다!');
  };

  return (
    <div className="App">
    <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/12">Home12</Link>
        </nav>

        {/*<header className="App-header">*/}

        {/*</header>*/}
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/12" element={<div>H2222ome</div>} />
        </Routes>
        <Counter />
        <Button text="text23" onClick={handleClick}/>
        <Info/>
        <ContextSample/>
        <NewCounter/>
        <NewInfo/>
        <Average/>

    </BrowserRouter>
    </div>
  );
}

export default App;
