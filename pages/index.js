import Link from "next/link";
import Layout from "../componentes/Layout";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body border-light text-light border-rounded">
          <div className="row">
            <div className="col-md-4">
              <a href="https://hector788.github.io/landinpage-innovationtech/?fbclid=IwAR3A9b9C99Zg4qRy_95KugQIvX3G0DpJ36WUqMWkF39WkN0DM5BD_GhVK7gz">
                <img
                  src="/logo.png"
                  alt=""
                  className=" img-fluid ml-5 p-md-1 "
                  style={{ width: "80%" }}
                  id="animacion"
                ></img>
              </a>
            </div>
            <div className="col-md-8 p-md-3 text-center">
              <h4 className="text-info">
                Freelancer /Frontend Developer/ Digital Content
              </h4>
              <h2 className="text-danger text-uppercase ">
                <strong>Hector De Hoyos</strong>
              </h2>
              <p className="text-white">
                Bienvenido a mi sitio personal en esta pagina puedes encontrar
                mas informacion acerca de mis proyectos y de InnovacionTECH nos
                enfocamos en servicios de diseño grafico desarrollo web y
                marketing digital
              </p>

              <Link href="/servicios">
                <a className="btn btn-info">Hire Me</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**segunda seccion**/}

    <div className="row py-3">
      <div className="col-md-4">
        <div className="card border-light text-light border-rounded">
          <div className="card-body">
            <h1 className="text-danger">Skills</h1>
            {skills.map(({ skills, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5 className="text-warning">{skills}</h5>
                <div className="progress">
                  <div
                    className="progress-bar "
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card border-light text-light border-rounded">
          <div className="card-body ">
            <h1 className="text-danger">Experiencia</h1>
            <ul>
              {experiences.map(({ title, description, from, to }, index) => (
                <li key={index}>
                  <h3 className="text-info">{title}</h3>
                  <h5 className="text-warning">
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
            <Link href="/description">
              <a className="btn btn-info col-md-2 float-md-right">know More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/**Portafolio*/}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-danger">Portafolio</h1>
            </div>
            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-70 border-light text-light border-rounded">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt="imagen"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body  ">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a className="btn btn-info float-md-left" href="#">
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/">
              <a className=" btn btn-info">More Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
