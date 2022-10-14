import React, {FC} from 'react';
import Header from "./components/header"
import Card from './components/card';

const App:FC = () => {
  return (
    <div className="App">
      <Header />
      <ul className="menu menu-horizontal bg-base-100 rounded-box">
        <li><a>Daily</a></li>
        <li><a>Weekly</a></li>
        <li><a>Monthly</a></li>
      </ul>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2"> Hello</div>
        <div className="col-span-1">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
