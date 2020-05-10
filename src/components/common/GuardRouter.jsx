import React, {Component} from 'react';
import {
    withRouter
} from "react-router-dom"
class GuardRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <this.props.component {...this.props}/>
        )
    }
    componentWillMount() {
        // console.log(this.props.path);
    }
}
export default withRouter(GuardRouter)