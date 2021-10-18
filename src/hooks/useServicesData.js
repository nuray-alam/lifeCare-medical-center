import { useState, useEffect } from 'react';
const useServicesData = () => {

    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('./servicesData.json')
        .then( res => res.json())
        .then( data => setServices(data))
    },[]);


    return [services,setServices];
}

export default useServicesData;