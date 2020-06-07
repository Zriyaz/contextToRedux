import React from 'react';
import UserCreate from "./UserCreate"
import LanguageContext from "../contexts/LanguageContext"
import ColorContext from "../contexts/ColorContext"

class App extends React.Component{
  state={language:'english'}

  onLanguageChange = (language)=>{
    this.setState({language})
  }

  render(){
  return (
    <div className="ui container">
      <div>
        Select a language:
        <i className="flag india" 
        onClick={()=>this.onLanguageChange('Hindi')} />
        <i className="flag pakistan"
        onClick={()=>this.onLanguageChange('Urdu')} />
      </div>
      <ColorContext.Provider value="red">
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </ColorContext.Provider>

    </div>
  );
 }
}

export default App;