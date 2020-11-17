import React, { Component } from 'react';
import Cpe from './Cpe';

export class Cpes extends Component {
    render() {
        return this.props.cpes.map((cpe) => (
            <Cpe cpe={cpe} />
        ));
    }
}

export default Cpes;
