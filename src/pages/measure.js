import React, {useState, useContext} from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {MainContext} from './../components/Provider';
import styles from './index.module.scss';


const INCREMENT = gql`
mutation SetDoctorTime($email: String, $place: String, $department: String, $time: Date, $totalPeople: Int) {
    setDoctorTime(input:{ email: $email, place: $place, department: $department, time: $time, totalPeople: $totalPeople }) {
      _id
    }
  }
`;

const Measure = () =>{
    const {state, dispatch} = useContext(MainContext)
    const [
        updateTodo,
        { loading: mutationLoading, error: mutationError }
      ] = useMutation(INCREMENT)
    const handleIncrement = () =>{
        updateTodo({ variables: { email: state.email, place: state.place, department: state.department, time:new Date(), totalPeople: 1 } })
      }
    return (
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    {
                        mutationError && <div className={` ${styles.notification} ${styles['is-danger']} `}>
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
                <a onClick={handleIncrement} className={` ${styles.button} ${ mutationLoading && styles['is-loading'] } ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-success']} `}>INCREMENT</a>
            </div>
        </section>
        </>
    )
}

export default Measure;