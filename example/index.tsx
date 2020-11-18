import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CoolThing } from '../.';

const App = () => {
  return (
    <div>
      <CoolThing>Test</CoolThing>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
