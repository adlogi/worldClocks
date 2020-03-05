import React from 'react';

export default class Clock extends React.Component {

  handleClose = () => {
    this.props.handleClose(this.props.clock.id)
  }

  render() {
    /**********************
      Check these for formating dates and times:
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
    **********************/
    return (
      <div className="card border-primary mb-3" style={{maxWidth: 18+'rem'}}>
        <div className="card-header">
          {this.props.timezone.name}
          <button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="card-body text-primary">
          <h5 className="card-title">
            {this.props.time.toLocaleString('en-US', {
              hour: 'numeric', minute: 'numeric', second: 'numeric', 
              timeZone: this.props.timezone.name,
              timeZoneName: 'short'
            })}
          </h5>
        </div>
      </div>
    );
  }
}
