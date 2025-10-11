"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className={`footer mt-auto py-2 ${styles.footer}`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4 p-0">
            <ul className="nav p-0">
              <li><Link href="/discover" className={`nav-link px-2 ${styles.footerLink} ${pathname === '/discover' ? styles.active : ''}`}>Discover</Link></li>
              <li><Link href="/about" className={`nav-link px-2 ${styles.footerLink} ${pathname === '/about' ? styles.active : ''}`}>About</Link></li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <span>&copy; {new Date().getFullYear()} Greenshelf. All rights reserved.</span>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;