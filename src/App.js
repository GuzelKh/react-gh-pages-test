import './App.css';
import Button from './components/button/Button';
import Header from './components/header/Header';


function App() {
  return (
    <div>
      <Header />
      <Button text={'Войти'}/>
      <Button text={'Зарегистрироваться'}/>
      
    </div>
  );
}

export default App;
