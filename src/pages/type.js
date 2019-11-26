import React from 'react';
import Link from 'next/link'

import styles from './index.module.scss';

const Type = () =>{
    return(
        <section className={styles.section}>
            <div className={`${styles.container} ${styles.center} `}>
                <Link href="/doctor-consultation-dep">
                    <a className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-primary']} ${styles['is-uppercase']} `}>
                        Doctor Consultation
                    </a>
                </Link>
<br/>
                <Link href="/lab">
                <a className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-info']} ${styles['is-uppercase']} `}>
                    Lab
                </a>
                </Link>
<br/>
                <Link href="/pharmacy">
                <a className={` ${styles.button} ${styles['is-large']} ${styles['is-fullwidth']} ${styles['is-success']} ${styles['is-uppercase']} `}>
                    Pharmacy
                </a>
                </Link>
            </div>
        </section>
    )
}

export default Type;