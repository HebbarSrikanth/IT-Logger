import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';
import Searchbar from './components/layouts/Searchbar';
import Logs from './components/logs/Logs';
import Floatbtn from './components/layouts/Floatbtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/technicians/AddTechModal';
import TechList from './components/technicians/TechList';
import { Provider } from 'react-redux'
import store from './store'

const App = () => {

  useEffect(() => {
    //Initialises Materialize JS
    M.AutoInit()
  }, [])

  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className='container'>
          <Floatbtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechList />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
