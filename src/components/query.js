import React from 'react'

export default function query() {
    const [cpeData, setCPEData] = useState([]);
  
    const name = 'Microsoft Word'
    
    useEffect(() => {
        fetch('/getCPE?search='+name).then(res => res.json()).then(data =>{
            //setCPEData(data.cpe.cpes)
            console.log(data.cpe.cpes);
        });
    }, [])

    return (
        <div>
            
        </div>
    )
}


