export const mapboxStylingURL: string = 'mapbox://styles/mapbox/streets-v11'

export const mapContainerStyle: { [name: string]: string } = {
  height: '100%',
  width: '100%',
}

type CountyBreakdown = {
  southCounty: string[]
  centralCounty: string[]
  northCounty: string[]
}

export const citiesByCountyRegion: CountyBreakdown = {
  southCounty: [
    'Carpinteria',
    'Goleta',
    'Isla Vista',
    'Montecito',
    'Santa Barbara',
    'Summerland',
  ],
  centralCounty: ['Buellton', 'Lompoc', 'New Cuyama', 'Santa Ynez', 'Solvang'],
  northCounty: ['Guadalupe', 'Los Alamos', 'Orcutt', 'Santa Maria'],
}
