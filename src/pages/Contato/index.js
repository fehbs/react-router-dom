import { Link } from 'react-router-dom';

function Contato() {
    return (
      <div>
       <h1>Página de contato</h1>
       <span>Contato da empresa (dd) xxxx-xxxx</span><br/> <br/>
       <span>stackx@mail.com</span><br/> <br/>

       <Link to="/">Home</Link><br/>
       <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
  
  export default Contato;