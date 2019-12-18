import React from 'react';
import { connect } from 'react-redux';
import { Login } from './store/actions/loginAction';
import history from './history';
import './Login.css';

class loginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        event.preventDefault();

        const { username, password } = this.state;

        const user = {
            username,
            password
        };

        this.props.Login(user);

        this.props.history.push('/');

    }


    render() {
        console.log(this.props);
        return (
            <form className="row" onSubmit={this.handleSubmit}>
                <div className="row" id="loginForm">
                    <h1 className="row" id="headerTitle">Login</h1>
                    <a href="./create"> or CREATE A NEW ACCOUNT</a>

                    <label className="row">
                        Username:
            <input className="row"
                            name="username"
                            placeholder="Your username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <label className="row">
                        Password:
            <input className="row"
                            name="password"
                            placeholder="Your password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </label>


                    <input type="submit" onClick={this.handleSubmit} value="Submit" className="row" id="button" />
                </div></form>
        )
    }
}

const mapStateToProps = state => ({
    username: state.user.username,
    password: state.user.password
})

export default connect(mapStateToProps, { Login })(loginForm)



// import React from 'react';
// import { connect } from 'react-redux';
// import { addUser } from './store/actions/userAction';
// import history from './history';
// import './Create.css';

// class CreateForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             email: "",
//             username: "",
//             password: "",
//         };

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInputChange = event => {
//         const { name, value } = event.target;
//         this.setState({
//             [name]: value
//         });
//     }

//     handleSubmit(event) {
//         this.props.addUser(
//             this.state
//         );

//         history.push('/');
//     }

//     render() {
//         return (
//             <form className="row" onSubmit={this.handleSubmit}>
//                 <div className="row" id="loginform">
//                     <h1 className="row" id="headerTitle">Create a new Account</h1>
//                     <label className="row">
//                         Email:
//             <input className="row"
//                             name="email"
//                             placeholder="Enter your email"
//                             type="email"
//                             value={this.state.email}
//                             onChange={this.handleInputChange}
//                         />
//                     </label>
//                     <label className="row">
//                         Username:
//             <input className="row"
//                             name="username"
//                             placeholder="Choose your username"
//                             type="text"
//                             value={this.state.username}
//                             onChange={this.handleInputChange}
//                         />
//                     </label>
//                     <label className="row">
//                         Password:
//             <input className="row"
//                             name="password"
//                             placeholder="Choose your password"
//                             type="password"
//                             value={this.state.password}
//                             onChange={this.handleInputChange}
//                         />
//                     </label>


//                     <input type="submit" value="Submit" className="row" id="button" />
//                 </div></form>
//         )
//     }
// }

// const mapStateToProps = state => ({
//     email: state.user.email,
//     username: state.user.username,
//     password: state.user.password
// })

// export default connect(mapStateToProps, { addUser })(CreateForm)
