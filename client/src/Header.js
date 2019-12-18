import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './store/actions/loginAction';

class Header extends React.Component {
    handleLogout() {

        this.props.logout();

        this.props.history.push('/');

    }


    render() {
        const { jsonwebtoken } = this.props;

        const userLinks = (
            <a href="/login" onClick={this.handleLogout} className="navigation">Logout</a>
        );

        const guestLinks = (
            <Link to="/login">
                <p className="navigation">Login</p>
            </Link>
        );


        return (
            <div className="header">
                <Link to="/">
                    <p className="navigation">Home</p>
                </Link>
                <Link to="/staff">
                    <p className="navigation">Our staff</p>
                </Link>
                <Link to="/cities">
                    <p className="navigation">Cities</p>
                </Link>
                {jsonwebtoken ? userLinks : guestLinks}

            </div>
        )
    }
}

// Header.propTypes = {
//     jsonwebtoken: React.PropTypes.object.isRequired
// }

function mapStateToProps(state) {
    return {
        jsonwebtoken: state.user.token
    };
}



export default connect(mapStateToProps, { logout })(Header);