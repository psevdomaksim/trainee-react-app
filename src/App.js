import './App.css';
import CardItemList from './components/Card/CardItemList';
import Header from './components/Header/Header';
import NavbarItemList from './components/Navbar/NavbarItemList';
import SearchInput from './components/SearchInput/SearchInput';



function App() {
  return (
    <div className="App">
      <NavbarItemList/>
      <hr/>
      <Header/>
   
      <CardItemList/>
    </div>
  );
}

export default App;
