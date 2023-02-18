import React from "react";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import { AnimatePresence } from "framer-motion";

const AIChat = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <MobileLayout $darkShadow>
      <AnimatePresence></AnimatePresence>
    </MobileLayout>
  );
};

export default AIChat;
