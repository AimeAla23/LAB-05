import { CompWithProps } from './components/CompWithProps'
import './App.css'
function App() {
  const inputText = "    ";
   return (
    <>
<CompWithProps text={inputText} outputElement="p" />
   </>
   )
}

export default App