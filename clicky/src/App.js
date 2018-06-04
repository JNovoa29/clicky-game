import React, {Component, Fragment} from 'react';
import Counter from './Counter';
import card1 from './components/card1'
import card2 from './components/card2'
import card3 from './components/card3'
import card4 from './components/card4'

class App extends Component {
    render () {
        return (
            <Fragment>
                <Counter />
                <Counter />
                <Counter />
                <Counter />
            </Fragment>
        );
    };
};

export default App;
