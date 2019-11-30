import React, {useState, useContext} from 'react';
import Router from 'next/router'

import {MainContext} from './../components/Provider';
import styles from './index.module.scss';

const Place = () =>{
    const {state, dispatch} = useContext(MainContext)
    const [place, setPlace] = useState('')
    const handleChange = (e) =>{
        setPlace(e.target.value)
    }
    const handleSubmit = () =>{
        dispatch({ type:"SET_PLACE", payload:place })
        const href = "/department"
        const as = href 
        Router.push(href, as, { shallow: true })
    }
    return(
        <section className={styles.section}>
            <div className={styles.container}>

            <div className={`${styles.field} ${styles['has-addons']}`}>
                <div className={`${styles.control} ${styles['is-expanded']} `}>
                    <input value={place} onChange={handleChange} placeholder="Place" className={` ${styles.input} ${styles['is-large']} `} />
                </div>
                <div className={styles.control}>
                    <a  className={` ${styles.button} ${styles['is-large']} ${styles['is-primary']} `} onClick={handleSubmit} >SUBMIT</a>
                </div>
            </div>


            </div>
        </section>
    )
}

export default Place;