import { useState, useEffect } from 'react';
const useServicesData = () => {

    let url = '/servicesData.json'
  
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return [services, setServices];
}

export default useServicesData;