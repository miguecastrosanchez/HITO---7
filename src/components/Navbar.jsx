import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext.jsx';

import { CartContext } from '../context/CartContext.jsx';


function Navbar(){

let precio = 25000;


const { user, setUser } = useContext(GlobalContext);
const { total } = useContext(CartContext);

console.log(user);
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    
    
     <Link to="/">
            <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
     </Link>
   




    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          
         
          <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-light me-2" : "btn btn-dark me-2"}>
            🍕 Home
          </NavLink>
          
        </li>

        {user !== null ? <li className="nav-item">
         <Button variant="dark">🔒Profile</Button>
        </li> 
        :  <li className="nav-item">

             
        <NavLink to="/Register" className={({ isActive }) => isActive ? "btn btn-light me-2" : "btn btn-dark me-2"}>
          🔐Register
        </NavLink>
            
        </li>}

        {user !== null ? <li className="nav-item">
         <Button variant="dark" onClick={()=> setUser(null)}>🔒Logout</Button>
        </li> 
        :  <li className="nav-item">
         

         <NavLink to="/Login" className={({ isActive }) => isActive ? "btn btn-light me-2" : "btn btn-dark me-2"}>
          🔐Login
        </NavLink>
        
        
        
        </li>}

      </ul>
    </div>
    
    <span className="text-white fw-bold ms-3">
    {user !== null ? user.email : "No logeado"}
    </span>

    <div className="Carrito">
        
       
         <NavLink to="/Cart" className={({ isActive }) => isActive ? "btn btn-light me-2" : "btn btn-dark me-2"}>
          🛒 Total: ${total.toLocaleString()}
        </NavLink>
         </div>
  </div>
</nav>
        </>
    )
}

export default Navbar