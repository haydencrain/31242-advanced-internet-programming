import * as React from 'react';
import './App.less';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      header: 'Do you like JavaScript?',
      message: '',
      view: '' // '', 'incorrect', 'correct'
    };
    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
    this.handleTryAgainButton = this.handleTryAgainButton.bind(this);
  }

  handleYesClick(e: any) {
    this.setState({
      message: 'Correct!',
      view: 'correct'
    });
  }

  handleNoClick(e: any) {
    this.setState({
      message: 'Incorrect!',
      view: 'incorrect'
    });
  }

  handleTryAgainButton(e: any) {
    this.setState({
      message: '',
      view: ''
    });
  }

  renderYesNoButtons() {
    return (
      <div>
        <button onClick={this.handleYesClick}>Yes</button>
        <button onClick={this.handleNoClick}>No</button>
      </div>
    );
  }

  renderTryAgainButton() {
    return <button onClick={this.handleTryAgainButton}>Try Again</button>;
  }

  render() {
    return (
      <div id="app">
        <h1>{this.state.header}</h1>
        {this.state.message && <h1>{this.state.message}</h1>}
        {!this.state.view && this.renderYesNoButtons()}
        {this.state.view === 'incorrect' && this.renderTryAgainButton()}
      </div>
    );
  }
}

export default App;
