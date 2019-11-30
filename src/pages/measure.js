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
    const [people, setPeople] = useState(0)
    const [successId, setSuccessId] = useState("")
    const [success, setSuccess] = useState(false)
    const {state, dispatch} = useContext(MainContext)
    const [updateTodo, { loading: mutationLoading, error: mutationError }] = useMutation(INCREMENT)
    const handleIncrement = () =>{
        updateTodo({ variables: { email: state.email, place: state.place, department: state.department, time:new Date(), totalPeople: people } }).then((r)=>setSuccessId(r.data.setDoctorTime._id))
        setPeople(0)
        setSuccess(true)
      }
    return (
        <>
        <section className={styles.section}>
            <div className={styles.container}>
                <div>
                    {
                        success && <div className={` ${styles.notification} ${styles['is-success']} `}>
                         <span className={`${styles['is-family-code']} ${styles['has-background-light']} `}>{successId}</span>
                    </div>
                    }
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
                            <button onClick={ ()=>setPeople(1) } className={`${styles.button} ${ people == 1 && styles['is-focused'] } ${styles['is-large']} `}>
                                1
                            </button>
                        </p>
                        <p className={styles.control}>
                            <button onClick={ ()=>setPeople(2) } className={`${styles.button} ${ people == 2 && styles['is-focused'] } ${styles['is-large']} `}>
                                2
                            </button>
                        </p>
                        <p className={styles.control}>
                            <button onClick={ ()=>setPeople(3) } className={`${styles.button} ${ people == 3 && styles['is-focused'] } ${styles['is-large']} `}>
                                3
                            </button>
                        </p>
                        <p className={styles.control}>
                            <button onClick={ ()=>setPeople(4) } className={`${styles.button} ${ people == 4 && styles['is-focused'] } ${styles['is-large']} `}>
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