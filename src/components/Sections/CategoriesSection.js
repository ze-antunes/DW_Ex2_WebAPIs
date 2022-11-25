import React from 'react'
import Display from '../Display'
import { useEffect, useState } from 'react';
import { useAPI } from '../../hooks/apis/General.ts';

export default function CategoriesSection() {

    const [categoriesData, setCategoriesData] = useState('');
    const [error, setError] = useState('');
    const api = useAPI();

    useEffect(() => {
        api
            .getCategories()
            .then((data) => {
                setCategoriesData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div>
            <Display title="Categories" categoryBlocks={categoriesData?.categories?.items} />
        </div>
    )
}