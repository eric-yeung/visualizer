import React from 'react'

export default function query() {
    const [cpeData, setCPEData] = useState([]);
  
    const name = 'Microsoft Word'
    const version = '2.3'

    useEffect(() => {
        fetch('/getCPE?search='+name+'&version='+version).then(res => res.json()).then(data =>{
            //setCPEData(data.cpe.cpes)
            console.log(data.cpe.cpes);
        });
    }, [])

    return (
        <div>
            
        </div>
    )
}


