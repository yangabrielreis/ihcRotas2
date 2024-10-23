import { Link } from "react-router-dom";
import './estilo.css'; 

function Home() {
    return (
        <div className="home-container">
            <h1>Home</h1>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/produtos">Produtos</Link>
            <Link to="/error">Página de Erro</Link>
        </div>
    );
}

export default Home;
