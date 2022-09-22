import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import DrawerAppBar from './components/navbar/Navbar';
import Categories from './components/categories/Categories';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<DrawerAppBar/>}>
          <Route index path='/' element={<div>Home</div>}/>
          <Route index path='Home' element={<div>Home</div>}/>
          <Route index path='Products' element={<div>Products</div>}/>
          <Route index path='Categories' element={<Categories/>}/>
          <Route index path='Brands' element={<div>Brands</div>}/>
        </Route>
    </Routes>
    </QueryClientProvider>
  )
}
export default App
