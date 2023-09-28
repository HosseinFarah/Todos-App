import { NavLink } from "react-router-dom";
import logo from '../assets/navbar/img/todo.png'
export const Navbar = () => {


  return (
    <>      
    <header className=" navbar-expand-lg" style={{
    width: "100%",
    height: "75px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    boxShadow: ".1rem .1rem .8rem rgb(117, 64, 169)",
    marginBottom:"19px",
    zIndex:"90"
    }}>
    <nav>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavLink className="navbar-brand" to="/" style={({isActive})=>({color: isActive?"red":""})}>
            {" "}
            Todo
          </NavLink>

        </ul>
      </div>
    </nav>
    <img src={logo} alt="Todo_Logo" className="rounded float-end" style={{height:"50px"}} />
    </header>
   

  
    </>
    
  );
};
