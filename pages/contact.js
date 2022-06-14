import Head from "next/head";
import contact from "../styles/Contact.module.css";
const Contact = () => {
  return (
    <>
      <Head>
        <title>BR Architects | Contact</title>
        <meta name="keywords" content="Architect" />
      </Head>
      <div className={contact.headerSection}>
        <header className={contact.header}> Contact </header>
        <p>Lets get in touch and talk about your next project.</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Comment" />
        <button>SEND MESSAGE</button>
      </div>
    </>
  );
};

export default Contact;
