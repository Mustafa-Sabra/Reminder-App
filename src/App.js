import React , {Component} from "react";
import {add_reminder, remove_reminder, clear_reminders} from "./actionCreator/actions";
import {connect} from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "./reminder.png"

class App extends Component{
    state={
        text:"",
        date:new Date(),
    }
    renderReminder = () => {
        const reminders=this.props.reminders;
        return(
            <ul className="list-group">
                {
               reminders.map(reminder => {
                   return(
                       <li key={reminder.id} className="list-group-item">
                           <div>{reminder.text}</div>
                           <div>{moment(new Date(reminder.date)).fromNow()}</div>
                           <div className="closeIcon btn btn-danger" onClick={() => this.props.remove_reminder(reminder.id)}>X</div>
                       </li>
                   )
               })
                }
               </ul>
        )
    }
    render(){
        console.log(this.props)
        return(
            <div className="App">
                <img src={logo}/>
                <div className="app-title">
                    <h2>What Should U Do ?</h2>
                </div>
                
                <input type="text"
                       className="form-control"
                       placeholder="Type What U Want..."
                       value={this.state.text}
                       onChange={(e)=>this.setState({
                           text:e.target.value,
                       })}>
                </input>
                <DatePicker
                       className="form-control"
                       value={this.state.date}
                       placeholderText="Enter A Date..."
                       selected={this.state.date}
                       onChange={date => this.setState({date : date})}
                       showTimeSelect
                       timeFormat="HH:mm"
                       timeCaption="time"
                       dateFormat="MMMM d, yyyy h:mm aa"
                />
                <button className="btn btn-primary btn-block"
                        onClick={()=> {
                            this.props.add_reminder(this.state.text, this.state.date)
                            this.setState({
                            text:"",
                            date:"",
                        })
                        }}>Add Reminder</button>
                {this.renderReminder()}
                <button className="btn btn-danger btn-block"
                        onClick={()=>this.props.clear_reminders()}>Clear Reminders</button>
            </div>
        )
    }
}


export default connect((state) =>{
    return {
        reminders: state,
    }
},{add_reminder, 
   remove_reminder,
   clear_reminders})(App);