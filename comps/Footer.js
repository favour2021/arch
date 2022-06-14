import Link from "next/link";
import foot from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={foot.footerSection}>
      <p>
        Powered by
        <Link href="/">
          <>
            <a className={foot.link}> w3.css</a>
          </>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
