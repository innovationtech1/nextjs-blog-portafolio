import Link from "next/link";
import Layout from "../componentes/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout>
      <p className="text-center">
        Could not load your page please return
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default _error;
