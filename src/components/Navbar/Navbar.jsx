
import "./Navbar.css"; // Import your CSS file for styling

function Navbar() {
   
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link" >New Game {}</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">About</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">Help</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
