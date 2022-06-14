// import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import info from "../styles/About.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  // const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  const data = await res.json();
  return {
    props: { people: data },
  };
};

const About = ({ people }) => {
  console.log(people);
  return (
    <>
      <Head>
        <title>BR Architects | About</title>
        <meta name="keywords" content="Architect" />
      </Head>
      <div className={info.contactSection}>
        <header className={info.header}>About</header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          facilis eligendi placeat, cumque dolorem quaerat maxime ullam? Earum
          aperiam temporibus cum doloribus pariatur. Officiis omnis deserunt
          molestiae! Natus, illum odit. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        {people.map((detail) => (
          <Link href={"/" + detail.id} key={detail.id}>
            <a className={info.details}>{detail.title}</a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default About;
