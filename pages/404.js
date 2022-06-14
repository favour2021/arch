import Link from "next/link";
import Head from "next/head";
import info from "../styles/About.module.css";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>BR Architects | Not Found</title>

        <meta name="keywords" content="Architect" />
      </Head>
      <div className={info.notFound}>
        <h1>404...</h1>
        <h2>That page can't be found.</h2>
        <p>
          Go back to the
          <Link href="/">
            <a> Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
