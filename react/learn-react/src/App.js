import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let name = "Hiếu"
  return (
    <>
      <Header></Header>
      <div className="test">{name} đẹp trai</div>
      <Footer></Footer>
    </>
  );
}

export default App;
