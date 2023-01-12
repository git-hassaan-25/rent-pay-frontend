import React from "react";
import TopHeader from "../components/TopHeader";
import MainHeader from "../components/MainHeader";
import MainPage from "../components/MainPage";
const Home = () => {
  const [size, setSize] = React.useState(window.innerWidth);
  const checkInnerWidth = () => {
    setSize(window.innerWidth);
  };
  React.useEffect(() => {
    // console.log(size);
    window.addEventListener("resize", checkInnerWidth);
    return () => {
      window.removeEventListener("resize", checkInnerWidth);
    };
  });
  return (
    <>
      {size > 800 ? <TopHeader /> : ""}
      <MainHeader />
      <MainPage />
    </>
  );
};

export default Home;
