import React, {useState, useContext} from 'react';
import { useMutation } from '@apollo/react-hooks';

import {MainContext} from './../components/Provider';
import styles from './index.module.scss';

const Measure = () =>{
    const {state, dispatch} = useContext(MainContext)
    const [status, setStatus] = useState("none")
    return (
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    {
                        status == "success" && <div className={` ${styles.notification} ${styles['is-primary']} `}>
                        Success
                    </div>
                    }
                    {
                        status == "failure" && <div className={` ${styles.notification} ${styles['is-danger']} `}>
                        Network failure
                    </div>
                    }
                    
                </div>
                <br/>
                <div>
                    <div className={styles.content}>
                        <h2>
                            Number of people
                        </h2>
                    </div>
                    <div className={` ${styles.field} ${styles['is-grouped']} `}>
                        <p className={styles.control}>
                            <button className={`${styles.button} ${styles['is-large']} `}>
                                1
                            </button>
                        </p>
                        <p className={styles.control}>
                            <button className={`${styles.button} ${styles['is-large']} `}>
                                2
                            </button>
                        </p>
                        <p className={styles.control}>
                            <button className={`${styles.button} ${styles['is-large']} `}>
                                3
                            </button>
                        </p>
                        <p className={styles.control}>
                            <button className={`${styles.button} ${styles['is-large']} `}>
                                4+
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.section}>
            <div className={styles.container}>
                <a className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-success']} `}>INCREMENT</a>
            </div>
        </section>
        </>
    )
}

export default Measure;