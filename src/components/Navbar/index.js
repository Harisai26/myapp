import React, {useState} from 'react'
import styles from './Navbar.module.css'

// Using SVG as a component is cleaner than managing image files.
// A simple and reliable SVG for the logo
const Logo = () => (
  <svg height="32" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
    <text 
      x="0" 
      y="30" 
      fontFamily="Inter, sans-serif" 
      fontSize="28px" 
      fill="black"
    >
      <tspan fontWeight="800">Leo9</tspan>
      <tspan fontWeight="500"> Studio</tspan>
    </text>
  </svg>
);

const Navbar = () => {
  // We use state to keep track of whether the mobile menu is open or closed.
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Storing nav links in an array makes it super easy to add or remove them later.
  const navLinks = ['About', 'Services', 'Work', 'Process', 'Blog', 'Contact']

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Logo />
      </div>

      {/* This div contains the links for the desktop view */}
      <div className={styles.desktopNavLinks}>
        {navLinks.map(link => (
          // TODO: In a real app, these would be <Link> components from React Router.
          <a href='#' key={link} className={styles.navLink}>
            {link}
          </a>
        ))}
      </div>

      <button className={styles.talkButton}>Let's Talk</button>

      {/* The hamburger icon is only visible on mobile (see the CSS file) */}
      <button className={styles.hamburger} onClick={() => setIsMenuOpen(true)}>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M3 12H21'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 6H21'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M3 18H21'
            stroke='black'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>

      {/* This is a neat trick: the mobile menu only renders if isMenuOpen is true. */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M18 6L6 18'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M6 6L18 18'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <div className={styles.mobileNavLinks}>
            {navLinks.map(link => (
              <a
                href='#'
                key={link}
                className={styles.mobileNavLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
