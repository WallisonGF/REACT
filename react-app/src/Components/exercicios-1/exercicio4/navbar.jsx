import React,{ Component }          from 'react';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="nabar navbar-light bg-light pb-2 pt-2">
                <div className="navbar-brand">
                    <i className="fa fa-user-circle fa-2x m-2 ml-3 text-info" style={{color: 'darkslategray' }}>
                        {this.props.userName}
                    </i>

                    <button
                        className="btn btn-danger m-2"
                        style={{ right: '3%', position: 'absolute' }}
                        onClick={this.props.deslogar}
                    >
                        Logout
                    </button>
                </div>
            </div>
        );
    }
}