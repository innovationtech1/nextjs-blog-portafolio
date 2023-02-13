import Layout from "../componentes/Layout";
import { posts } from "../profile";

const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card border-light text-light border-rounded">
      <div className="overflow">
        <img src={post.imagen} className="card-img-top  img-fluid " alt="" />
        <div className="card-body">
          <h1> {post.title} </h1> <p> {post.content} </p> <a> {post.link} </a>
          <h2 className="alert-primary text-white text-center">
            {post.precio}
          </h2>
        </div>
      </div>
    </div>
  </div>
);

const Servicios = () => (
  <Layout footer={true} title="Services" light>
    <h1 className="card-title"> Servicios </h1>
    <div className="row">
      {posts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </div>
  </Layout>
);

export default Servicios;
