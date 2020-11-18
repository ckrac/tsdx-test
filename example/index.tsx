import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, CoolThing } from '../.';

const App = () => {
  return (
    <div>
      <Thing />
      <CoolThing>Test</CoolThing>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
