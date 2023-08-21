import classes from "./Header.module.css";
import React from "react";
import meals1 from "../../assets/meals1.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Online food Service</h1>
        <HeaderCartButton showCart={props.showCart}/>
      </header>
      <div>
        <img
          src={meals1}
          alt="Table full of food items"
          width='1024'
          height='411'
          className={classes["main-image"]}
        />
      </div>
    </React.Fragment>
  );
}
export default Header;
