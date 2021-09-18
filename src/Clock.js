import React from 'react';
import moment from 'moment';


function formatDate (date, format) {
    format = format.replace(/yyyy/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
    return format;
};
  
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: moment()};
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        50
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({         // 直接 stateに代入してはだめ。reactの基本
        date: moment()
      });
    }  
  
    render() {
      return (
        <div>
          {formatDate(this.state.date.toDate(), 'HH:mm:ss:SSS')}
          <p>
         {this.state.date.toString()}
         </p>
         <p>
         {this.state.date.utc().toString()}
         </p>
         </div>
        
      );
    }
}

export default  Clock;

/*
          {this.state.data.clone().tz('Europe/London')}


*/