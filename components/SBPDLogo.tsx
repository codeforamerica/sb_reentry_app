import useLanguage from '../hooks/useLanguage'

import styles from './SBPDLogo.module.css'

const altText = {
  english: "County of Santa Barbara Public Defender's Office Logo",
  spanish:
    'Logotipo de la Oficina del Defensor Público del Condado de Santa Bárbara',
}

const SBPDLogo = () => {
  const { language } = useLanguage()

  return (
    <img
      src="/images/logo192.png"
      alt={altText[language]}
      className={styles.SBPDLogo}
    />
  )
}

export default SBPDLogo
