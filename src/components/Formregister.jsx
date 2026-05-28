import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Formregister(){

//ESTADOS DE INPUT
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmpassword, setConfirmpassword] = useState("")

//FUNCION PARA VALIDAR EL FORMULARIO Y QUE LOS ESTADOS SE UTILICEN (CUANDO PRESIONAMOS EL BOTON)
const validarForm = function(e3){
    
    e3.preventDefault()
    
    if(email == "" || password == "" || confirmpassword == ""){
        alert("Todos los campos son obligatorios")
        return
    }
    
    if(password.length < 6){
        alert("La contraseña tiene que tener al menos 6 caracteres")
        return
    }
    
    if(password !== confirmpassword){
        alert("Las contraseñas no coinciden")
        return
    }

    setEmail("")
    setPassword("")
    setConfirmpassword("")

    alert("Registro completo, bienvenido a ¡Pizzería Mamma Mia!")
}

return(
    <>
    <section className="Register-section">
        <form action="" className="Register" onSubmit={(e3)=>{validarForm(e3)}}>
            
            <h2>Formulario de Registro</h2>
            <label htmlFor="Email" >Email</label>
            <br />
            <input type="email" placeholder="ejemplo@ejemplo.com" value = {email} onChange={(e)=>{setEmail(e.target.value)}} />
            <br />
            <label htmlFor="Password">Password</label>
            <br />
            <input type="password" placeholder="******" value = {password} onChange={(e1)=>{setPassword(e1.target.value)}} />
            <br />
            <label htmlFor="Password" >Password Confirm</label>
            <br />
            <input type="password" placeholder="******" value={confirmpassword} onChange={(e2)=>{setConfirmpassword(e2.target.value)}}/>
            <br />
           <Button variant="dark" type="submit">Register</Button>
        </form>
    </section>
    </>
)

}

export default Formregister;