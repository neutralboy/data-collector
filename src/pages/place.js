import React, {useState, useEffect, useContext} from 'react';
import Router from 'next/router'

import {MainContext} from './../components/Provider';
import {getFromLocal, storeToLocal} from './../data';
import styles from './index.module.scss';

const Place = () =>{
    const {state, dispatch} = useContext(MainContext)
    const [place, setPlace] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [placeList, setPlaceList] = useState([])
    useEffect(()=>{
        if(!loaded){
            let list = getFromLocal('place')
            setPlaceList( JSON.parse(list) )
            setLoaded(true)
        }

    })
    const handleChange = (e) =>{
        setPlace(e.target.value)
    }
    const handleSubmit = () =>{
        let newArr = placeList
        newArr.push(place)
        storeToLocal('place', JSON.stringify(newArr))
        dispatch({ type:"SET_PLACE", payload:place })
        const href = "/type"
        const as = href 
        Router.push(href, as, { shallow: true })
    }
    const handleSelect = (a) =>{
        dispatch({ type:"SET_PLACE", payload: a })
        const href = "/start-measuring"
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

            <div className={`${styles.list}`}>
                {
                     placeList.map((i)=> <a onClick={()=>handleSelect(i)} className={styles['list-item']} key={Math.random()}>{i}</a> )
                }
            </div>


            </div>
        </section>
    )
}

export default Place;