import styles from 'styles/about.module.scss'

type Props = {}

const About = (props: Props) => {
  return (
    <section>
      <div className={styles.about_wrapper}>
        <h1>Hey, I'm Ikwunze Kelvin.</h1>
        <p>
          I'm a <span>frontend Developer</span> passionate about creating
          exceptional <span>user experiences</span>… With a keen{' '}
          <span>eye for detail</span>, I strive to deliver{' '}
          <span>pixel-perfect</span> user interfaces.
        </p>
      </div>
    </section>
  )
}

export default About
