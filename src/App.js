import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import Searchbar from './components/layouts/Searchbar';
import Logs from './components/logs/Logs';
import Floatbtn from './components/layouts/Floatbtn';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {

  useEffect(() => {
    //Initialises Materialize JS
    M.AutoInit()
  }, [])

  return (
    <Fragment>
      <Searchbar />
      <div className='container'>
        <Floatbtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
