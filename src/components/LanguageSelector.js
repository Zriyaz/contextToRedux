import React from "react"
import LanguageContext from "../contexts/LanguageContext"

class LanguageSelector extends React.Component{
  static contextType = LanguageContext
  render(){
    console.log(this.LanguageSelector)
    return(
      <div>
        Select a language:
        <i className="flag india" 
        onClick={()=>this.props.onLanguageChange('Hindi')} />

        <i className="flag pakistan"
        onClick={()=>this.props.onLanguageChange('Urdu')} />
      </div>
    )

  }
}

export default LanguageSelector