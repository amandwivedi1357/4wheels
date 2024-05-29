import React from 'react'
import FAQSection from './FAQSection'
import "../css/faq/faqbottom.css"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import FaqCheuffeur from './FaqSecCheuffeur'
export default function FaqBottom() {
  return (
    <div className='faq_cont'>
      <div className="top_faq">
        {/* <p className="head_text">
        Do you have any question?
        </p> */}
        {/* <p className="desc_text">
        We Believe in Quality Service
        </p> */}
        <div className="faq_content">
          
            {/* <FAQSection/> */}
            <Tabs isFitted variant='enclosed'>
  <TabList mb='1em' >
    <Tab _hover={{ color: 'black' }}>Cheuffeur Drive</Tab>
    <Tab _hover={{ color: 'black' }}>Self Drive</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <FaqCheuffeur/>
    </TabPanel>
    <TabPanel>
      <FAQSection/>
    </TabPanel>
  </TabPanels>
</Tabs>
        </div>
      </div>
    </div>
  )
}
