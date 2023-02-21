import React, { useState, useEffect } from "react";
import { StyledComponent } from "styled-components";
import Welcome from "./component/Welcome";
import axios from "axios";

const Infortainment = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Welcome visible={visible} />
    </div>
  );
};

export default Infortainment;
