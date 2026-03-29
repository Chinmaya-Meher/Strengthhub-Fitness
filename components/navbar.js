export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        <span className="logo-main">StrengthHub</span>
        <span className="logo-sub">FITNESS</span>
      </div>

      <ul className="nav-links">
        <li className="active">HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>TRAINERS</li>
        <li>PAGES</li>
      </ul>

      <button className="nav-btn">JOIN NOW</button>

    </nav>
  );
}