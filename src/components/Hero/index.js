import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const headingText = 'Reinventing Businesses through design.'
  // We split the heading into an array of words to animate each one individually.
  const words = headingText.split(' ')

  // A list of clients for the marquee.
  const clients = [
    'Google',
    'Meta',
    'Amazon',
    'Netflix',
    'Shopify',
    'Paypal',
    'Microsoft',
  ]
  // For a seamless infinite scroll, we just duplicate the list of clients and slide it across.
  const marqueeClients = [...clients, ...clients]

  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>
        {words.map((word, index) => (
          <span key={index} className={styles.wordWrapper}>
            <span
              className={styles.word}
              // This is the magic for the staggered effect. Each word's animation
              // is delayed by a fraction of a second based on its position in the sentence.
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {word}
            </span>
          </span>
        ))}
      </h1>
      <p className={styles.subheading}>
        We are a full-service creative agency that builds MAGNETIC brands,
        websites and digital experiences that can't be ignored.
      </p>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeContent}>
          {marqueeClients.map((client, index) => (
            <div key={index} className={styles.client}>
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
