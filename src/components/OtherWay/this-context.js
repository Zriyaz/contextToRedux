import React from "react"
import LanguageContext from "../contexts/LanguageContext"


export default class Button extends React.Component{
  static contextType=LanguageContext



  render(){
    const text=this.context==='Hindi'? 'Submit':'Urdu'
    return <button className="ui button primary">{text}</button>
  }
}