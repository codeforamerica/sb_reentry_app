import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Marker } from 'react-mapbox-gl'

import Popup from './Popup'
import { usePopup } from '../hooks'
import { LocationRecord } from '../types/records'

import useLanguage from '../hooks/useLanguage'
import { CopyHolder } from '../types/language'

import styles from './MapMarker.module.css'

interface MapMarkerProps {
  locationRecord: LocationRecord
}

const copy: CopyHolder = {
  english: {
    altText: 'Map marker image',
  },
  spanish: {
    altText: 'Imagen de marcador de mapa',
  },
}

const MapMarker = ({ locationRecord }: MapMarkerProps) => {
  const [imgSrc, setImgSrc] = useState<string>('')
  const { push, pathname, query } = useRouter()
  const { popupLocation, setPopupLocation, clearPopupLocation } = usePopup()

  const { language } = useLanguage()
  const activeCopy = copy[language]

  const {
    longitude,
    latitude,
    single_category,
    name,
    uuid,
    multiple_categories,
  } = locationRecord
  const isSearchPage: boolean = pathname.startsWith('/search')

  useEffect(() => {
    if (isSearchPage) setImgSrc(multiple_categories[0])
    else setImgSrc(single_category)
  }, [])

  const linkToRecord = (): void => {
    if (query?.id !== uuid)
      if (isSearchPage) push('/search/[id]', `/search/${uuid}`)
      else push('/[category]/[id]', `/${single_category}/${uuid}`)
  }

  return (
    <>
      {popupLocation && name && (
        <Popup clientX={popupLocation.clientX} clientY={popupLocation.clientY}>
          {name}
        </Popup>
      )}
      <Marker coordinates={[longitude, latitude]} anchor="bottom">
        <img
          src={`/icons/${imgSrc}_marker.svg`}
          alt={activeCopy.altText}
          className={styles.MapMarker}
          onMouseEnter={setPopupLocation}
          onMouseMove={setPopupLocation}
          onMouseLeave={clearPopupLocation}
          onClick={linkToRecord}
        />
      </Marker>
    </>
  )
}

export default MapMarker
