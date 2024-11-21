import React from "react";
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stat
      </h1>
      <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
        <img
          src="https://leetcard.jacoblin.cool/himanshukumar2910?theme=dark&font=Syne%20Mono&ext=heatmap"
          alt="LeetCode Stats"
          style={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
          }}
        />
      </div>
    </Row>
  );
};

export default Leetcode;
