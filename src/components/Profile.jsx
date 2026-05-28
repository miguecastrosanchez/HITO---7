import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow text-center" style={{ width: "350px" }}>
        <h2>Perfil</h2>

        <p className="mt-3">
          <strong>Correo del usuario:</strong>
        </p>

        <p>usuario@pizzeria.com</p>

        <Link to="/" className="btn btn-dark not-found-btn">
          Cerrar sesión
        </Link>
      </div>
    </div>
  );
}

export default Profile;