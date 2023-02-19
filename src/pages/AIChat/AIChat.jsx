import React, { useState } from "react";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import { AnimatePresence } from "framer-motion";
import AIInput from "./component/AIInput";
import Loading from "./component/Loading";
import AIResult from "./component/AIResult";

const AIChat = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <MobileLayout darkShadow>
      <AnimatePresence>
        {currentPage === 0 && (
          <AIInput currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 1 && (
          <Loading currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 2 && (
          <AIResult currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
      </AnimatePresence>
    </MobileLayout>
  );
};

export default AIChat;
