import React, {useContext} from 'react';

import {MainContext} from './../components/Provider';
import styles from './index.module.scss';

const DoctorConsultationType = () =>{
    const {state, dispatch} = useContext(MainContext)
    const handleClick = (type) =>{
        dispatch({
            type: "SET_TYPE",
            payload: type
        })
    }
    return(
        <section className={styles.section}>
            <div className={styles.container}>
            
                <div className={` ${styles.columns} ${styles['is-vcentered']} `}>
                    <div className={` ${styles.column} ${styles['is-6']} `}>
                        <a onClick={()=>handleClick('BOOKED')} className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-primary']} `}>PRE BOOKED</a>
                    </div>
                    <div className={` ${styles.column} ${styles['is-6']} `}>
                        <a onClick={()=>handleClick('NOT-BOOKED')} className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-info']} `}>NOT PREBOOKED</a>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default DoctorConsultationType