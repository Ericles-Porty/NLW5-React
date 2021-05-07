import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export function Header () {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/play-green.svg" alt="Playcast" />
            <h2>Playcast? </h2>
            <p>O pior Podcast que você já viu!</p>

            <span>{currentDate}</span>
        </header>
    );
}