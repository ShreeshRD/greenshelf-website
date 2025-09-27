import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`footer mt-auto py-3 ${styles.footer}`}>
      <div className="container text-center">
        <span>&copy; {new Date().getFullYear()} Greenshelf. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;