import React, {useState, useEffect, useContext} from 'react';
import Router from 'next/router'

import {MainContext} from './../components/Provider';
import styles from './index.module.scss';

const Type = () =>{
    return(
        <section className={styles.section}>
            <div className={`${styles.container} ${styles.center} `}>

                <div className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-primary']} ${styles['is-uppercase']} `}>
                    Doctor Consultation
                </div>
<br/>
                <div className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-info']} ${styles['is-uppercase']} `}>
                    Lab
                </div>
<br/>
                <div className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-success']} ${styles['is-uppercase']} `}>
                    Pharmacy
                </div>

            </div>
        </section>
    )
}

export default Type;