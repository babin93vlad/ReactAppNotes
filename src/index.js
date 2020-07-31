import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';


class WhoAmI extends Component{
    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }
    }

    nextYear(){
        console.log(1)
    }

    render() {
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return (
            <>
                <button onClick={this.nextYear}> ++ </button>
                <h1>
                    My name is {name}, surname - {surname}, years = {years}
                </h1>
                <a href={link}>My profile</a>
            </>
        )
    }
}




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


