import './App.css'
import { List } from './components/List';
/*import { Button } from './components/Button'*/
import { WapperList } from './components/WrapperList';
/*
function App() {
  return (
    <>
      <h1>Jakuna Matata</h1>
      <Button/>
    </>
  )
}
export default App
*/
/*
function App() {
  const buttonText = "Count : ";

  return (
    <>
      <h1>Jakuna Matata</h1>
      <Button text={buttonText}/>
    </>
  )
}
export default App
*/
function App() {
  return (
    <>
      <WapperList>
        <ul>
          <li> Pan </li>
          <li> Queso </li>
          <li> Mantequilla</li>
        </ul>
      </WapperList>
    </>
  )
}
export default App
