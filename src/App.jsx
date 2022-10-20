import { Routes, Route, Link } from "react-router-dom";
import { chislo, rezparol, useParol } from "./functions";
import './App.css';
import styles from './styles.module.css';


export function App() {
    return(
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="parol" element={<Parol />} />
            <Route path="rnumber" element={<Rnumber />} />
        </Routes></div>
    );
}

function Parol(){
  let first_psw = useParol();
    return (
     <div>
        <Link to="parol" className={styles.txt_btn}></Link>
        <h1>Генератор паролей</h1>
        <h1 id="psw">{first_psw}</h1>
        <div><span className={styles.name_psw}>Длина пароля</span><input id="dlina"></input></div>
        <button onClick={rezparol} className={styles.knopka_psw}>Сгенерировать</button>
     </div>
    );
} 

function Rnumber(){
  let result = 0
    return (
        <div>
           <Link to="rnumber"></Link>
           <h1>Генератор чисел</h1>
           <h1 id="num">0</h1>
           <div><span className={styles.name}>От</span><input id="ot"></input></div>
           <div><span className={styles.name}>До</span><input id="do"></input></div>
           <button onClick={chislo} className={styles.knopka}>Сгенерировать</button>
        </div>
       );
   } 

function Home(){
    return (
     <div>
        <h1>Генератор всего</h1>
            <span className={styles.txt_btn}><Link to="Rnumber">Число</Link></span>  
            <span className={styles.txt_btn}><Link to="Parol">Пароль</Link></span>
     </div>
    );
} 
export default App;
