import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MaterialTable from 'material-table'
import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';

export default function Cpe(props) {
    const [title, setTitle] = useState('A List of Vulnerabilities for: ' + props.searchQuery)
    const [onLoad, setOnLoad] = useState(false)
    const [showCpe, setShowCpe] = useState(true)
    const [cveData, setCveData] = useState([])


    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#66CD00',
          },
          secondary: {
            main: '#66CD00',
          },
        },
    
      });
    useEffect(()=>{
        if(!onLoad){
            var counter = 1;
            props.cpes.map((cpe) => (
            cpe.name = getShortnedName(cpe.name),
            cpe.id = counter++
            ));
            setOnLoad(true)
        }
    })

    function getShortnedName(name){
        name = name.substring(10)
        // name = name.replace('*','')
        // name = name.replace(':','')
        return name
    }

    function displayCVEs(name){
        setShowCpe(false)
        setTitle('A List of Weaknesses for: ' +name)
        //setCveData = //call the function to get CVE's python
        
    }
   
    if(showCpe){
        return (
            <MuiThemeProvider theme={theme}>
                <MaterialTable
                title={title}     // Search result here
                columns={[
                { title: 'Number', field: 'id' },
                { title: 'Name', field: 'name' },
                { title: 'Version', field: 'version', type: 'numeric' },
    
                ]}
                data={props.cpes}        
                options={{
                sorting: true,
                selection: true,
                search: true
                }}
                //onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.name))}
                onRowClick={(rows) => displayCVEs(rows.target.textContent)}
                //onSelectionChange={(rows) => alert('You selected ' + rows[0].name)}
            />
          </MuiThemeProvider>
        )
    }
    else{
        console.log("hey")
        return (
            <MuiThemeProvider theme={theme}>
                <MaterialTable
                title={title}     // Search result here
                columns={[
                { title: 'Number', field: 'id' },
                { title: 'Name', field: 'name' },
                { title: 'Version', field: 'version', type: 'numeric' },

                ]}
                data={props.cpes}        
                options={{
                sorting: true,
                selection: true,
                search: true
                }}
                //onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.name))}
                onRowClick={(rows) => console.log(rows.target.textContent)}
                //onSelectionChange={(rows) => alert('You selected ' + rows[0].name)}
                />
            </MuiThemeProvider>
        )
    }


    
}
