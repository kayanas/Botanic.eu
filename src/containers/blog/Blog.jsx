import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js";

import "./blog.css";

const Blog = () => {
  return (
    <div className="botanic__blog section__paddging" id="blogs">
      <div className="botanic__blog-heading">
        <h1 className="gradient__text">Join the Community</h1>
      </div>
      <div className="botanic__blog-container">
        <div className="botanic__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2022" title="Kava su medumi: naujas skonis ir sveikata stiprinantis iprotis" />
        </div>
        <div className="botanic__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2022" title="Lietuviskos dovanos - visada madingos, o siuo metu - ant bangos." />
          <Article imgUrl={blog03} date="Sep 26, 2022" title="Mazam kambarely, ugnele kuriu" />
          <Article imgUrl={blog04} date="Sep 26, 2022" title="Gydimas medumi. Liaudies medicinos receptai" />
          <Article imgUrl={blog05} date="Sep 26, 2022" title="Botanic Garden istorija" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
