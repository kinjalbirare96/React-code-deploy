import React from 'react';
import CommentList from './CommentList';
class ItemDetails extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
          commentValue : '',
          CommentArray : '',
      };
   }
  handleSubmit(){
    this.setState({
        CommentArray : [ ...this.state.CommentArray ,this.state.commentValue],
        commentValue :''
    })
  }
  onChange(e){
     this.setState({
        commentValue : e.target.value
     })
  }
  render() {
    const { currentData } = this.props.location;
     return (
       <div className = "joksItemWrapper">
        <h4 className = "heading">  Item Details  </h4>
         <ul>  
              <li> {currentData.id} </li> 
              <li> {currentData.punchline} </li>
              <li>{currentData.setup} </li>
              <li>{currentData.type }</li>
         </ul>

         <div className = "comment-section"> 
             <form className = "commentform"> 
                  <input type = "text" name = "comment" onChange = {this.onChange.bind(this)} value = {this.state.commentValue}/>
                  <input type = "button" onClick = {this.handleSubmit.bind(this)}  value = "Submit"/>
             </form>
         </div>

         <div className = "comment-list"> 
         <h4 className = "heading">  Comments  </h4>
            { !! this.state.CommentArray ?
                <CommentList  commentData = {this.state.CommentArray} />  
            :''}
         </div>
       </div>  
      );
    }
}
 export default ItemDetails;
