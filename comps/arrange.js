import Footer from "./Footer";
import Navbar from "./Navbar";

const Arrange = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Arrange;
