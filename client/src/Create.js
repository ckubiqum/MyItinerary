import React from 'react';
import { connect } from 'react-redux';
import { addUser } from './store/actions/userAction';
import history from './history';
import './Create.css';

class createForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.addUser(
            this.state
        );

        history.push('/');
    }

    render() {
        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="row" id="createForm">
                    <h1 className="row" id="headerTitle">Create account</h1>
                    <a href="./login"> or LOGIN to existing account</a>

                    <label className="row">
                        Email:
            <input className="row"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label className="row">
                        Username:
            <input className="row"
                            name="username"
                            placeholder="Choose your username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label className="row">
                        Password:
            <input className="row"
                            name="password"
                            placeholder="Choose your password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </label>


                    <input type="submit" value="Submit" className="row" id="button" />
                </div></form>
        )
    }
}

const mapStateToProps = state => ({
    email: state.user.email,
    username: state.user.username,
    password: state.user.password
})

export default connect(mapStateToProps, { addUser })(createForm)
