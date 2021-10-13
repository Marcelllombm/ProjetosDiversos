import React from 'react';
import styles from './Contato.module.css'
import foto from '../img/contato.png'
import Head from './Head';
const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>

      <Head title='Ranek | Contato' description="Entre em contato" />
      <div className={styles.contatoItem}>
        <img src={foto} alt='Máquina de escrever' />
      </div>

      <div className={styles.contatoItem} >
        <h1>Contato</h1>
        <ul className={styles.dados}>
          <li>melombm@hotmail.com</li>
          <li>000 99999-9999</li>
          <li>Redencial Agreste</li>
        </ul>
      </div>

    </section>
  )
}

export default Contato
