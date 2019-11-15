import React, {useState, useContext} from 'react';
import Router from 'next/router'

import {MainContext} from './../components/Provider';
import { storeToLocal } from './../data';
import styles from './index.module.scss';

const IndexPage = () => {
    const {state, dispatch} = useContext(MainContext)
    const [email, setEmail] = useState('');
    const handleChange = (e) =>{
        setEmail(e.target.value)
    }
    const handleSubmit = () =>{
        storeToLocal('email', email)
        dispatch({ type:"SET_EMAIL", payload: email })
        const href = "/place"
        const as = href 
        Router.push(href, as, { shallow: true })
    }
    return(
    <section className={styles.section}>
        <div className={styles.container}>


            <div className={`${styles.field} ${styles['has-addons']} ${styles.alignCenter} `}>
                <div className={`${styles.control} ${styles['is-expanded']} `}>
                    <input value={email} onChange={handleChange} placeholder="Email" className={` ${styles.input} ${styles['is-large']} `} />
                </div>
                <div className={styles.control}>
                    <a onClick={handleSubmit} className={` ${styles.button} ${styles['is-large']} ${styles['is-primary']} `}>SUBMIT</a>
                </div>
            </div>


        </div>
    </section>
    )
}

export default IndexPage;