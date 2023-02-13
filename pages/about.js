import Layout from "../componentes/Layout";

const About = () => (
  <Layout>
    <h1 className="card-title"> About </h1>
    <div className="row text-center">
      <div className=" card card-body col-md-12">
        <div className="card card-body align-content-center align-items-center">
          <a href="/">
            <h1> Regresar </h1>
            
          </a>
         
          <iframe width="853" height="480" src="https://www.youtube.com/embed/XKnkh047ieo" title="INNOVATIONTECH" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      </div>
    </div>
  </Layout>
);

export default About;
