"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Search from './Search'; // Import the Search component

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={`p-3 ${styles.header}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <Link href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <Image src="/logo.png" alt="Greenshelf Logo" width={60} height={60} className={styles.logo} />
            <h2 className="ms-3">Greenshelf</h2>
          </Link>

          {pathname !== '/' && (
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
              <Search />
            </div>
          )}

          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link href="/discover" className={`nav-link px-2 ${styles.navLink} ${pathname === '/discover' ? styles.active : ''}`}>Discover</Link></li>
            <li><Link href="/about" className={`nav-link px-2 ${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>About</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;