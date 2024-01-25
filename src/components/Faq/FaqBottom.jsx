import React from 'react'
import FAQSection from './FAQSection'
import "../css/faq/faqbottom.css"
export default function FaqBottom() {
  return (
    <div className='faq_cont'>
      <div className="top_faq">
        <p className="head_text">
        Do you have any question?
        </p>
        <p className="desc_text">
        We Believe in Quality Service
        </p>
        <div className="content">
            <FAQSection/>
        </div>
      </div>
    </div>
  )
}
