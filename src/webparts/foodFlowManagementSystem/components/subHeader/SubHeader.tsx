import * as React from 'react';
import styles from './styles.module.scss';

export const SubHeader = () => {
    return (
        <div className={styles.subheader}>
            <div className={styles.container}>
                <ul className={styles.etapasDoPedido}>
                    <li>Comida</li>
                    <li>Bebida</li>
                    <li>Forma de pagamento</li>
                    <li>Finalizar</li>
                </ul>
            </div>
        </div>
    )
}