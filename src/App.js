import React from "react";
import logo from './logo.svg';


function Footer(){
  return(
    <footer style={{width:"70px", display: "flex",
          flexDirection: "row",
          margin: "5px",
          height: "70px",
          width: "auto",
          backgroundColor: "#2E86C1",
          border: "1px solid gray",
          borderRadius: "5px",
          boxShadow:"2px 2px 4px rgba(04, 05, 06, 0.7)" }}>
            <p style={{color:"#61DAFB", margin:'27px',textAlign:"center", displayContent:'center'}}>All the rights are reserved for latter use</p>
      </footer>
  )
}

function Nav(){
  return(
    <nav
        style={{
          display: "flex",
          
          margin: "5px",
          height: "70px",
          width: "auto",
          backgroundColor: "#2E86C1",
          border: "1px solid gray",
          borderRadius: "5px",
          boxShadow:"2px 2px 4px rgba(04, 05, 06, 0.7)"
        }}
      >
        <img src={logo} alt="Logo" style={{width: "70px"}}/>
        <p style={{Color:'white',fontSize:'22px', fontWeight:"bold",color:"#61DAFB"}}>ReactFacts</p>
        <ul
          style={{
            textDecoration: "none",
            display: "inline",
            color: "#61DAFB",
            width: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
          }}
        >
          <li
            style={{
              textDecoration: "none",
              display: "inline",
              margin: "5px",
              float: "right",
              padding:"5px"
            }}
          >
            Home
          </li>
          <li
            style={{
              textDecoration: "none",
              display: "inline",
              margin: "5px",
              float: "right",
              padding:"5px"
            }}
          >
            About
          </li>
          <li
            style={{
              textDecoration: "none",
              display: "inline",
              margin: "5px",
              float: "right",
              padding:"5px"
            }}
          >
            Services
          </li>
          <li
            style={{
              textDecoration: "none",
              display: "inline",
              margin: "5px",
              float: "right",
              padding:"5px"
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
  )
}

function Main(){
  return(
    <main
        style={{
          height: "400px",
          width: "auto",
          margin: "15px",
          backgroundColor: "white",
          border: "2px solid #2E86C1",
          borderRadius: "10px",
          boxShadow:"2px 2px 4px rgba(04, 05, 06, 0.7)"
        }}
      >
        <div className="banner">
          <h1 style={{ color: "#2E86C1" , textAlign:"center"}}>
            Important things you should know about ReactJs
          </h1>
          <ul style={{
            textDecoration: "none",
            display: "block",
            color: "#2E86C1",
            justifyContent: "left",}}>
            <li>Its Desing Oriented</li>
            <li>Desing components are easy to Manage</li>
            <li>Just love React ,it loves back</li>
            <li>State management reduces developent time</li>
            <li>Desing components are easy to Manage</li>
            <li>Just love React ,it loves back</li>
            <li>State management reduces developent time</li>
          </ul>
        </div>
      </main>
  )
}

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default App;
