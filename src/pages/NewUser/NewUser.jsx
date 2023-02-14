import React, { useState } from "react";
import styled from "styled-components";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import IdInput from "./component/IdInput";
import PasswordInput from "./component/PasswordInput";
import PasswordCheck from "./component/PasswordCheck";
import { AnimatePresence } from "framer-motion";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(224, 222, 222, 0.4) 0%,
      rgba(224, 222, 222, 0) 100%
    ),
    #ffffff;
`;

const NewUser = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <MobileLayout>
      <Background>
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
      </Background>
    </MobileLayout>
  );
};

export default NewUser;
