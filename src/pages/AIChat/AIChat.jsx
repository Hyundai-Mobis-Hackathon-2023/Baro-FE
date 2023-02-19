import React, { useState } from 'react';
import MobileLayout from '../../component/MobileLayout/MobileLayout';
import { AnimatePresence } from 'framer-motion';
import AIInput from './component/AIInput';
import Loading from './component/Loading';
import AIResult from './component/AIResult';

const AIChat = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState({ detail: '', category: '' });

  return (
    <MobileLayout darkShadow>
      <AnimatePresence>
        {currentPage === 0 && (
          <AIInput
            question={question}
            setQuestion={setQuestion}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 1 && (
          <Loading
            answer={answer}
            setAnswer={setAnswer}
            question={question}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage === 2 && <AIResult answer={answer} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      </AnimatePresence>
    </MobileLayout>
  );
};

export default AIChat;
