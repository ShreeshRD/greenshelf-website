"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Search from './Search'; // Import the Search component

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={`p-4 ${styles.header}`}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center position-relative">
          <Link href="/" className={`d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none ${styles.centeredLogo}`}>
            <h2 className="ms-3">greenshelf</h2>
          </Link>

          {pathname !== '/' && (
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 ms-auto">
              <Search />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;