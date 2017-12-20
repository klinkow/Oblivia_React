import React from 'react'
import Banner from './views/banner'
import MultChoiceFooter from './views/mult_choice_footer'

const Question = (props) => {
  return (
    <div className="text">
      <Banner text={props.text}/>
      <MultChoiceFooter a={props.a} b={props.b} c={props.c} d={props.d}/>
    </div>
  )
}

export default Question;
