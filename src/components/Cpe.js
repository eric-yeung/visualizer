import React, { useEffect, useState }  from 'react';
import MaterialTable from 'material-table'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { forwardRef } from 'react';
 
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
 
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };



export default function Cpe(props) {
    const [title, setTitle] = useState('Keyword: ' + props.searchQuery)
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
            // var counter = 1;
            // props.cpes.map((cpe) => (
            //     cpe.name = getShortnedName(cpe.name),
            //     cpe.id = counter++
            // ));
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

    function backButton(){
        setShowCpe(true);
        setTitle('Keyword: ' + props.searchQuery);
    }
   
    if(showCpe){
        return (
            <div style={{ margin: "auto", maxWidth: "80%"}}>
                <MuiThemeProvider theme={theme}>
                <MaterialTable
                    icons={tableIcons}
                    title={title}     // Search result here
                    columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Version', field: 'version', type: 'numeric' },
        
                    ]}
                    data={props.cpes}        
                    options={{
                    sorting: true,
                    // selection: true,
                    search: true
                    }}
                    //onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.name))}
                    onRowClick={(rows) => displayCVEs(rows.target.textContent)}
                    //onSelectionChange={(rows) => alert('You selected ' + rows[0].name)}
                />
                </MuiThemeProvider>
            </div>
            
        )
    }
    else{

        return (
            <div style={{ margin: "auto", maxWidth: "80%"}}>
                <MuiThemeProvider theme={theme}>
                    <MaterialTable
                        icons={tableIcons}
                        title={title}     // Search result here
                        columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Description', field: 'description' },
                        { title: 'Published Date', field: 'published date' },
                        { title: 'V2', field: 'v2', type: 'numeric' },
                        { title: 'V3', field: 'v3', type: 'numeric' },

                        ]}
                        data={cveData}        
                        options={{
                        sorting: true,
                        // selection: true,
                        search: true
                        }}
                        //onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.name))}
                        onRowClick={(rows) => console.log(rows.target.textContent)}
                        //onSelectionChange={(rows) => alert('You selected ' + rows[0].name)}
                    />
                    
                    </MuiThemeProvider>

                <Button variant="contained" color="primary" onClick = {() => backButton()} > 
                    Back to results
                </Button>
            </div>
            
            
            
        )
    }


    
}