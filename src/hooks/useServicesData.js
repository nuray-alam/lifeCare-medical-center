import { useState, useEffect } from 'react';
const useServicesData = () => {
    // let url = './servicesData.json'
    let url = '/servicesData.JSON'
    // if (isDetail) {
    //     url = "http://localhost:3000/servicesData.json"
    //     console.log("detail url", url)
    // }

    const [services, setServices] = useState([]);
    useEffect(() => {
        // fetch('./servicesData.json
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return [services, setServices];
}

export default useServicesData;