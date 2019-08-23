import React from 'react';

export default class Example extends React.Component {
    constructor(props) {
        super(props);
        // state variables declared within constructor
        this.state = {
            count: 0,
            width: window.innerWidth
        }
        this.handleResize = this.handleResize.bind(this);
        this.handleCountClick = this.handleCountClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        document.title = `You clicked ${this.state.count} times`;
    }   

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            document.title = `You clicked ${this.state.count} times`;
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize() {
        this.setState({ width: window.innerWidth });
    }

    handleCountClick() {
        this.setState((prevState) => ({ count: prevState.count + 1}));
    }

    render() {
        return (
            <div>
                <p>{this.state.width}</p>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.handleCountClick}>
                    Click me
                </button>
            </div>
        );
    }
}