export interface Journey {
    CountryID: string,
    City: city,
    bodyText?: string,
}

interface city {
    Name: string,
    coordinate: [number, number]
}
