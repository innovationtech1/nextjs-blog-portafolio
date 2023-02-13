import Layout from "../componentes/Layout";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  return (
    <Layout>
      <h1 className="card-title"> Contacto </h1>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h2> {user.name} </h2> <img src={user.avatar_url} alt="Avatar" />
            <p> {user.bio} </p>
          </div>
              </div>
              <h3>Escribir contactos</h3>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/hector788");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default Github;
