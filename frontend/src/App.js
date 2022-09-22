import { Routes, Route } from 'react-router-dom';
import DrawerAppBar from './components/navbar/Navbar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DrawerAppBar/>}>
        <Route index path='/' element={<div>Home</div>}/>
        <Route index path='Home' element={<div>Home</div>}/>
        <Route index path='Products' element={<div>Products</div>}/>
        <Route index path='Categories' element={<div>Categories</div>}/>
        <Route index path='Brands' element={<div>Brands</div>}/>
      </Route>
    </Routes>
  )
}
export default App
