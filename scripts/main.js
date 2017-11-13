import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
class App extends PureComponent {
    render() {
        return 'Hello';
    }
}

ReactDOM.render(<App />, document.getElementById('app'));