import Image from "next/image";
import home from "../styles/Home.module.css";
const Project = () => {
  return (
    <div className={home.projectSection}>
      <header className={home.projectHead}>Projects</header>
      <div className={home.imageDiv}>
        <div className={home.img}>
          <Image src="/a.jpg" width={400} height={250} />
          <p>Summer House</p>
        </div>
        <div className={home.img}>
          <Image src="/b.jpg" width={400} height={250} />
          <p>Brick House</p>
        </div>
        <div className={home.img}>
          <Image src="/c.jpg" width={400} height={250} />
          <p>Renovate House</p>
        </div>
        <div className={home.img}>
          <Image src="/d.jpg" width={400} height={250} />
          <p>Barn House</p>
        </div>
        <div className={home.img}>
          <Image src="/e.jpg" width={400} height={250} />
          <p>Summer House</p>
        </div>
        <div className={home.img}>
          <Image src="/f.jpg" width={400} height={250} />
          <p>BrickHouse</p>
        </div>
        <div className={home.img}>
          <Image src="/g.jpg" width={400} height={250} />
          <p>Renovate House</p>
        </div>
        <div className={home.img}>
          <Image src="/h.jpg" width={400} height={250} />
          <p>Barn House</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
