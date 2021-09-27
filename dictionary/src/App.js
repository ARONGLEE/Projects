import React from "react";

import {Route, Switch} from 'react-router-dom'; 
import Dictionary from './Dictionary';
import AddDic from './AddDic';
import {db} from './firebase';

function App() {
  // const [list, setList] = React.useState({word : "댕댕이", explanation: "강아지를 의미한다.", example: "우리집 댕댕이 보여줄까?"});

  React.useEffect(() => {
    console.log(db);
  })
  return (
    <div className="App">
      <Route path="/" exact>
        <Dictionary />
      </Route>
      <Route path="/add" exact>
        <AddDic/>
      </Route>
    </div>
  );
}


export default App;
