// import './App.css'
import AddPage from "./components/AddPage/AddPage"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return ( <QueryClientProvider client={queryClient}>
  <AddPage />
</QueryClientProvider>)
}
export default App
