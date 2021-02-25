import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/gian-lucas.png" alt="Gian"/>
            <div>
                <strong>Gian Lucas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 2
                </p>
            </div>
        </div>
    )
}