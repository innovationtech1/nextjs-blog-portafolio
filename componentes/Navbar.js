import Link from "next/link";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg">
    <div className="container-fluid">
      <Link href="/">
        <a className="navbar-brand btn  text-info text-uppercase">
          <h1 className="display-5">
            <strong className="animation1 innovation-text">
              Innovation
              <span className="text-danger text-text">TECH</span>
            </strong>
          </h1>
        </a>
      </Link>
      <button
        className="navbar-toggler bg-gradient-danger"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link href="/servicios">
              <a className="nav-link text-uppercase btn text-danger ml-2">
                <strong> Servicios </strong>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contacto">
              <a className="nav-link text-uppercase btn  text-danger ml-2 ">
                <strong> Contacto </strong>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link text-uppercase btn  text-danger ml-2">
                <strong>About</strong>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;

