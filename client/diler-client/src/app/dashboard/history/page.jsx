// components/ExampleComponent.js
'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExampleComponent = () => {
    const apiUrl = process.env.NEXT_PUBLIC_FLASK_API_BASE_URL;
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${apiUrl}/home`);
                console.log(response)
                setData(response.data.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    return (
        <div>
            <p>Flask API Base URL: {apiUrl}</p>
            {data ? <p>Data: {data}</p> : <p>Loading...</p>}
        </div>
    );
};

export default ExampleComponent;
