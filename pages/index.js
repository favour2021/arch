import Head from "next/head";
import Image from "next/image";
import Project from "./project";
// import styles from "../styles/Home.module.css";
import home from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>BR Architects | Home</title>
        <meta name="keywords" content="Architect" />
      </Head>
      <div className={home.imageHeader}>
        <div className={home.images}>
          <Image src="/prism.jpg" width={1800} height={800} />
        </div>
        <p className={home.headerTitle}>
          <span className={home.titleSpan}>BR</span>
          Architects
        </p>
      </div>

      <Project />
    </>
  );
}
