import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="shopping-list">
                {/* <h1>Liste de courses pour {this.props.name}</h1> */}
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

exports Home;