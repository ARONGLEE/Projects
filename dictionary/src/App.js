import React from "react";

import {Route} from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import {db} from './firebase';
import Dictionary from './Dictionary';
import AddDic from './AddDic';
import Spinner from './Spinner';



function App() {
  const is_loaded  = useSelector((state) => state.dic.is_loaded);

  return (
    <div className="App">
      {!is_loaded && <Spinner/>}
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
