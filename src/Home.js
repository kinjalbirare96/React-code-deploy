import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        error: null,
        isLoaded: false,
        jokesItems: [],
      };
   }
   componentDidMount() {
    fetch("https://official-joke-api.appspot.com/jokes/ten")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            jokesItems: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
 
 render() {
    const { error, isLoaded, jokesItems } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
    <div className = "joksItemWrapper">
      <h4 className = "heading">  Title  </h4>
        <ul>
          {jokesItems.map(item => (
            <li>
             <Link  to={{ pathname: "/details", currentData: item }}>  {item.punchline}  </Link>
            </li>
          ))}
        </ul>
     </div>
      );
    }
  }
}
export default Home;
