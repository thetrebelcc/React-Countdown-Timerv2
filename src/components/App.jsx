


// COMPONETS THAT ARE IMPORTED 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder,deleteReminder } from '../actions';


// COMPONET THAT SETS THE STATE FOR THE APP 
// STATE IS IMMUTABLE DO NOT CHANGE IT MOTHERFUCKER


class App extends Component {
constructor(props){
    super(props);
    this.state = {
        text: ''
    }
}
addReminder(){
    this.props.addReminder(this.state.text);
}




deleteReminder(id){
    console.log('deletening in application', id);
    console.log('this.props',this.props);
}

renderReminders(){
    const { reminders } = this.props;
    return (
        <ul className="list-group col-sm-4">
            {
                reminders.map(reminder => {
                    return(
                        <li key= {reminder.id} className ="list-group-item">
                        <div className="list-item">{reminder.text}</div>
                        <div className="list-item delete button"
                        onClick={() => this.deleteReminder(reminder.id)}
                        
                        >

                        &#x2715;


                        </div>

                        </li>
                    )
                })
            }
        </ul>
    )
}


    render(){
        return (
            <div className="app">
            <div className="title">
            Reminder Pro
            </div>
                <div className="form-inline reminder-form">
                <div className="form-group">
                    <input
                    className="form-control"
                    placeholder="I have too.."
                    onChange={event => this.setState({text: event.target.value})}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick= {() => this.addReminder()}
                    
                    >
                       add a reminder     </button>


                </div>
                {this.renderReminders()}

        </div>
        )
    }
}


function mapStateToProps(state) {
    console.log('state',state);
    
    return{
        reminders: state
    }
}
 


    export default connect(mapStateToProps, { addReminder,deleteReminder }) (App);

// EXPORTS THE INTIRE FUNCTIO, AND THE MAPS TAKES CARE OF THE CONNECTCUOIKP