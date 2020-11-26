import React, { useEffect, useState }  from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/header';
import Cpe from './components/Cpe';
import Navbar from './components/layout/navbar';
import Input from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';



const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export function App () {

  const [search, setSearch] = useState('')
  const [version,setVersion] = useState(0)
  const [cpes, setCpes] = useState([])
  const [showSubmit, setShowSubmit] = useState(false)

  const [showSearchBar, setShowSearchBar] = useState(true)

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleRadioChange = (event) => {
    setVersion(event.target.value);
  };

  useEffect(()=> {
    if(search.length>0 && version !== 0){
      setShowSubmit(true)
    }
  });

  function getCpes(){
    fetch('/getCPE?search='+search+'&version='+version).then(res => res.json()).then(data => {
      setCpes(data.cpe.cpes);
      console.log(data.cpe.cpes)
      
      setShowSearchBar(false)
  })
  }

  return (
    <Router>
      <div className="">
        <div className="container">
          <Header />
          <Navbar />
          {showSearchBar
           ? 
           <div>
            <FormControl >
              <InputLabel htmlFor="demo-customized-textbox" >Search for a Product</InputLabel>
              <BootstrapInput                  
                onChange={handleSearchChange}
                  id="demo-customized-textbox" placeholder="Search for a Product"
              />
              
            </FormControl>
            <FormControl >
              <InputLabel id="demo-customized-select-label">CPE Format</InputLabel>
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                onChange={handleRadioChange}
                input={<BootstrapInput />}
              >
                <MenuItem value={2.2}>2.2</MenuItem>
                <MenuItem value={2.3}>2.3</MenuItem>
              </Select>

              {showSubmit  && 
                <Button variant="contained" color="primary" onClick={() => { getCpes() }}>
                  Search
                </Button>             
              }
            </FormControl>

     
         </div>
          ://else
          <Route 
            exact
            path="/" render= {props => (
            <React.Fragment>
              <Cpe cpes={cpes} searchQuery={search}/>
            </React.Fragment>
          )} 
          />
          }


        </div>
      </div>
    </Router> 
  )
  
}

export default App;
