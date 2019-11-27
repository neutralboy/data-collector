import React, {useContext} from 'react';
import Router from 'next/router'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import {MainContext} from './../components/Provider';
import styles from './index.module.scss';

const GET_DEPARTMENTS = gql`
{
    departments
}
`;

const Department = () =>{
    const {state, dispatch} = useContext(MainContext)
    const { loading, error, data } = useQuery(GET_DEPARTMENTS);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const handleClick = (a) =>{
        dispatch({ type: "SET_DEPARTMENT", payload: a })
        const href = "/measure"
        const as = href 
        Router.push(href, as, { shallow: true })
    }
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <div className={styles.list}>
                {
                    data.departments.map(i=>
                        <a onClick={()=>handleClick(i)} className={styles['list-item']} key={Math.random()}>{i}</a>
                        )
                }
                </div>
            </div>
        </section>
    )
}

export default Department; 