import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="wrapper nopre">
        <div id="container">
          <div id="left" href="#">
            <span>M</span>

            <div className="content">
              <h1 data-shadow-text="Personal half">Personal half</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <ul>
              <li className="first">
                <a href="#">CV</a>
              </li>
              <li className="second">
                <a href="#">Work</a>
              </li>
              <li className="third">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div id="right" href="#">
            <span>H</span>

            <div className="content">
              <h1 data-shadow-text="Business half">Business half</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <ul>
              <li className="first">
                <a href="#">About me</a>
              </li>
              <li className="second">
                <a href="#">Photos</a>
              </li>
              <li className="third">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
