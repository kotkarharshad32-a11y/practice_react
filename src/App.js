import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/dashboard/Dashboard';
import About from './Components/dashboard/about/About';
import Carrier from './Components/dashboard/carrier/carrier';
import Error from './Components/dashboard/error/error';
import Todos from './Components/dashboard/report/todos/Todos';
import Posts from './Components/dashboard/report/posts/Posts';
import Sidebar from './Components/Sidebar';
import Lists from './Components/dashboard/report/Lists/Lists';
import Tables from './Components/dashboard/report/Tables/Tables';



function App() {
  return (
    <BrowserRouter>
    <Sidebar/>


      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="about" element={<About />} />
        <Route path ="carrier" element={<Carrier/>}/>
        <Route path="/report/todos" element={<Todos />} />
        <Route path="/report/posts" element={<Posts />} />
        <Route path="/report/lists" element={<Lists />} />
        <Route path="/report/tables" element ={<Tables/>}/>

        <Route path="*" element={<Error />} />


      </Routes>

    </BrowserRouter>


  );

}

export default App;
