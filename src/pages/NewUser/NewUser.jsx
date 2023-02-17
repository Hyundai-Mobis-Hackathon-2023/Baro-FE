import React, { useState } from "react";
import styled from "styled-components";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import IdInput from "./component/IdInput";
import PasswordInput from "./component/PasswordInput";
import PasswordCheck from "./component/PasswordCheck";
import { AnimatePresence } from "framer-motion";

const NewUser = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <MobileLayout darkShadow>
      <AnimatePresence>
        {currentPage === 0 && (
          <IdInput
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            id={id}
            setId={setId}
          />
        )}
        {currentPage === 1 && (
          <PasswordInput
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            password={password}
            setPassword={setPassword}
          />
        )}
        {currentPage === 2 && (
          <PasswordCheck
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            password={password}
            checkPassword={checkPassword}
            setCheckPassword={setCheckPassword}
          />
        )}
      </AnimatePresence>
    </MobileLayout>
  );
};

export default NewUser;
