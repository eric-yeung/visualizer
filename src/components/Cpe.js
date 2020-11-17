import React, { Component } from 'react';

export default class Cpe extends Component {
    getStyle = () => {
        return {
            background: '#9aa7c1',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    { this.props.cpe.name }
                </p>
            </div>
        )
    }
}
