import React from "react";
import Emoji1 from "./Emoji1"

// class Emoji extends React.Component{
    
// }

class Emoji extends React.Component {
    constructor() {
        super();
        this.state = {
            EmojiData:""
          }
    }
    change=(e)=>{
            this.setState({
                EmojiData:e.target.value
            })
    }
    
    render() { 
        return (
            <div className="maindiv">
                <h1> Welcome to Emoji Search </h1>
                <input className="Input" type="text" placeholder="Search..."  onChange={this.change} />
                
                {Emoji1.filter((element)=>{
                    return(
                        ((element.keywords.toLowerCase().includes(this.state.EmojiData.toLowerCase()))||
                        (element.title.toLowerCase().includes(this.state.EmojiData.toLowerCase()))||
                        (element.symbol.toLowerCase().includes(this.state.EmojiData.toLowerCase())))
                    )
                })
                .map((element)=>{
                   return(
                    <div className="emojies">
                    {element.title}
                    {element.symbol}
                    </div>
                   )
                })
                
                }
                
            </div>
          );
    }
}
 
export default Emoji ;