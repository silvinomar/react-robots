import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // REACT16 dependent
    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundry;