// src/pages/Home.js

import Navbar from "../components/Navbar.jsx";
function Home() {
    const styles = {
    container: {
    display: "flex",
    flexdirection: "column",
    alignitems: "center",   /* centers horizontally */
    justifycontent: "start", /* top of the page */
    height: "50px",
    paddingtop: "40px",      /* some space from top */
    textalign: "center",
    },
    heading: {
      fontSize: "2rem",
      color: "#a10808ff",
    },
  };
  return (
    <div style={styles.heading}>
        <h1 style={styles.container} >Welcome to the Homepage</h1>
        <Navbar/>
    </div>
  );
}
export default Home;
