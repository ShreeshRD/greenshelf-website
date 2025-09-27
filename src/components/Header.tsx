import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`p-3 ${styles.header}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h2>Greenshelf</h2>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="#" className={`nav-link px-2 ${styles.navLink}`}>Discover</Link></li>
            <li><Link href="#" className={`nav-link px-2 ${styles.navLink}`}>About</Link></li>
          </ul>

          <div className="text-end">
            <button type="button" className={`btn btn-outline-light me-2 ${styles.loginBtn}`}>Login</button>
            <button type="button" className={`btn ${styles.signupBtn}`}>Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;