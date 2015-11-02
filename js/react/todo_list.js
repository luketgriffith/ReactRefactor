import React from 'react';

export default React.createClass({
  processData(){
    this.props.displayData();

  },
  render() {
    return (
      <div className='todoDiv'>
        <h1>{this.processData}</h1>
      </div>  
    );
  }

});