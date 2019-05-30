import React from 'react';
import Display from './Display';
import Clicker from './Clicker';
import { render } from 'react-dom';

class App extends React.Component {

    state = {
        num: 0
    };

    incrementClicker = () => {
        let { num } = this.state;
        this.setState({ num: num + 1 });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <Clicker increment={this.incrementClicker} />
                <Display num={this.state.num} />
            </div>
        )
    }


}

render(<App />, document.getElementById('root'));