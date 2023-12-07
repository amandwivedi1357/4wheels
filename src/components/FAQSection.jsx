import  { useState } from 'react';
import { Text, Collapse, VStack, Flex, Spacer } from '@chakra-ui/react';

import { FaArrowDown } from 'react-icons/fa';
import { data } from './designs/data';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{width:'60%',border:"1px solid gray",borderRadius:'4px', padding:'10px',margin:'auto'}}>
      <Flex >

      <Text  fontSize="xl" mb={2} cursor="pointer" onClick={handleToggle}>
        {question}
       

      </Text>
      <Spacer/>
        <FaArrowDown style={{marginTop:'4px'}}  onClick={handleToggle} cursor={'pointer'}/>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack align="start" spacing={4}>
          <Text>{answer}</Text>
        </VStack>
      </Collapse>
    </div>
  );
};

const FAQSection = () => {
  

  return (
    <VStack spacing={20} align="start">
      {data.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </VStack>
  );
};

export default FAQSection;
