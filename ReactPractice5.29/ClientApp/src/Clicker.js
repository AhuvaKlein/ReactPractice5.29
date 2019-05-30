import React from 'react';

class Clicker extends React.Component {

    incrementClick = () => {
        this.props.increment();
    }

    render() {


        return (
            <button onClick={this.incrementClick} className='btn btn-warning'>Increment!</button>
            )
    }
}
export default Clicker;