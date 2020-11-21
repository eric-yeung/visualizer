import React, { useEffect, useState }  from 'react';
import MaterialTable from 'material-table'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

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

    function displayCVEs(name) {
        //setCveData = //call the function to get cveData's python
        fetch('/getCVE?cpe='+name).then(res => res.json()).then(data => {
            setCveData(data.cve.cves);
            console.log(data.cve.cves)
            
            setShowCpe(false)
            setTitle('A List of Weaknesses for: ' +name)
        });
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

        return (
            <MuiThemeProvider theme={theme}>
                <MaterialTable
                title={title}     // Search result here
                columns={[
                { title: 'Number', field: 'id' },
                { title: 'Name', field: 'name' },
                { title: 'Description', field: 'description' },
                { title: 'Published Date', field: 'published date' },
                { title: 'V2', field: 'v2', type: 'numeric' },
                { title: 'V3', field: 'v3', type: 'numeric' },

                ]}
                data={cveData}        
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
