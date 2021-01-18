import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [loading,setLoading]=useState(true);
    const [products,setProducts]=useState([])

    const getProduct=async ()=>{
        const response=await fetch(url);
        const products=await response.json()
        setProducts(products);
        setLoading(false);
    }
    useEffect(() => {
        getProduct();
    }, [url]);
    return {loading,products}
};
