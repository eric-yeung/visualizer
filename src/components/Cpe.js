import React, { useEffect }  from 'react';
import Paper from './table.js'
import MaterialTable from 'material-table'

export default function Cpe(props) {
    
    function getStyle() {
        return {
            background: '#9aa7c1',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }
    useEffect(()=>{
         var counter = 1;
         props.cpes.map((cpe) => (
         cpe.name = getShortnedName(cpe.name),
         cpe.id = counter++
     ));
    })

    // props.cpes.map((cpe) => (
    //     cpe.name = getShortnedName(cpe.name)
    // ));
    function getShortnedName(name){
        name = name.substring(10)
        // name = name.replace('*','')
        // name = name.replace(':','')
        return name
    }
   
    console.log(props.cpes)
    return (
        
        <MaterialTable
        title="A List of Vulnerabilities"
        columns={[
          { title: 'Number', field: 'id' },
          { title: 'Name', field: 'name' },
          { title: 'Version', field: 'version', type: 'numeric' },

        ]}
        data={props.cpes}        
        options={{
          sorting: true,
          selection: true
        }}
        onSelectionChange={(rows) => alert('You selected ' + rows[0].name)}

      />
    )
    
}
