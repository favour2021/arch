import axios from "axios";
import info from "../styles/About.module.css";

export async function getServerSideProps(context) {
  const id = context.params.id;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );

  return {
    props: { detail: data },
  };
}

const Details = ({ detail }) => {
  console.log(detail);

  return (
    <div className={info.information}>
      <header>About</header>
      <p>Title: {detail.title}</p>
      <img src={detail.url}></img>
      <img src={detail.thumbnailUrl}></img>
      <p>
        About:Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab fuga
        nobis qui tempore impedit sit perferendis error corrupti dolorum facere,
        eos est, consequuntur, necessitatibus sapiente recusandae quos facilis
        laudantium deleniti?
      </p>
    </div>
  );
};

export default Details;
