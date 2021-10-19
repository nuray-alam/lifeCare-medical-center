import { useState, useEffect } from 'react';


const useConsultantsData = () => {

    const [consultants, setConsultants] = useState([]);
    useEffect(() => {
        fetch('/consultantsData.json')
            .then(res => res.json())
            .then(data => setConsultants(data))
    }, []);


    return [consultants,setConsultants];
}

export default useConsultantsData;