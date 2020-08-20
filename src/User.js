import React, {Component} from 'react';
import {Auth} from "aws-amplify";



class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attributes: "",
        };
    }

    async componentDidMount () {

        await Auth.currentUserInfo().then((userInfo) => {
            const {attributes = {}} = userInfo;
            this.setState({attributes});
            {console.log(this.state)}
        });
}

    render() {
            return(
                <div>{this.state.attributes['email']}
            </div>)

    }

}

export default User;