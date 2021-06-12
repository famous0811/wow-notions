import React from "react";
import { Link } from "react-router-dom";
import "./layout.scss";

interface LayoutProps {
  children?: React.ReactChild;
}

const index: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <h3>miniNotion</h3>
        <button>
          <Link to="/login">login</Link>
        </button>
      </header>
      <article>{children}</article>
    </>
  );
};

export default index;
