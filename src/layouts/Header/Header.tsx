import Logo from '../../components/Logo/Logo';
import styles from './styles.module.scss'

const Header = () => {
    return (
        <header className={styles.Header}>
            <h1>Pulse</h1>
            <Logo size='small'/>
        </header>
    );
};

export default Header;