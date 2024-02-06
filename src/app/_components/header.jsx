import Link from "next/link";
import logoImg from '@/app/assets/icons/next-JS-framework.png';
import classes from "./header.module.css"

export default function HeaderPage() {
    return (
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <img src={logoImg.src} alt="next js"/>
            Next JS
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </nav>
      </header>
      
    );
  }