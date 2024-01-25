import  { useState } from 'react';
import { Text, Collapse, VStack, Flex, Spacer } from '@chakra-ui/react';
import "../css/faq/faqbottom.css"
import { FaArrowDown } from 'react-icons/fa';
import { data } from '../designs/data';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{width:'90%',border:"1px solid gray",borderRadius:'4px',margin:'auto',background:'rgba(219, 209, 240, 0.89)'}}>
      <Flex p={'18px 23px 13px 23px'}>

      <Text className='que_style'  fontWeight={400} fontSize="16px" mb={2} cursor="pointer" fontFamily={'Poppins'} onClick={handleToggle}>
        {question}
       

      </Text>
      <Spacer/>
        <FaArrowDown style={{marginTop:'4px'}}  onClick={handleToggle} cursor={'pointer'}/>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack align="start" spacing={4} bg={'rgba(245, 242, 252, 0.62)'}>
          <Text className='text_style' p={'5px 23px'}>{answer}</Text>
        </VStack>
      </Collapse>
    </div>
  );
};

const FAQSection = () => {
  

  return (
    <VStack spacing={5} align="start">
      {data.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </VStack>
  );
};

export default FAQSection;
