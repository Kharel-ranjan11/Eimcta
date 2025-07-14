import React, { useEffect, useState } from 'react';
import getUserPages from '../fb/FBAPI'; // Make sure this is the default export

const Page = () => {
    const [pages, setPages] = useState([]);
    const [error, setError] = useState(null);
    console.log('Pages:', pages);
    useEffect(() => {
        getUserPages() 
            .then(res => {
                const formattedPages = (res.data || []).map(p => ({
                    id: p.id,
                    name: p.name,
                    access_token: p.access_token,
                    category: p.category || "N/A",
                    created_time: new Date().toISOString(), // FB doesn't return created_time here
                }));
                setPages(formattedPages);
            })
            .catch(err => setError(err?.response?.data?.error || "Failed to load pages"));
    }, []);
};
export default Page;
