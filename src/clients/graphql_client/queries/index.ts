import { gql } from 'graphql-request'

export const GET_HOTELS = gql`
query Hotels(
  $id: ID!
  $adults: Int!
  $children: Int!
  $checkin: ISO8601DateTime!
  $checkout: ISO8601DateTime!
  $city: ID!
  $isNeighborhood: Boolean!
  $isPoint: Boolean!
  $isCity: Boolean!
  $orderBy: AvailabilitiesManagerOrderInput
  $filterBy: AvailabilitiesManagerFilterInput
) {
  places: city(id: $city) {
    id
    name
    latitude
    longitude
    country {
      id
      name
      isoCode
    }
  }
  city(id: $id) @include(if: $isCity) {
    id
    name
    slug
    hotels(
      adults: $adults
      children: $children
      checkin: $checkin
      checkout: $checkout
      orderBy: $orderBy
      filterBy: $filterBy
    ) {
      ...HotelFragment
    }
  }
  neighborhood(id: $id) @include(if: $isNeighborhood) {
    id
    name
    slug
    hotels(
      adults: $adults
      children: $children
      checkin: $checkin
      checkout: $checkout
      orderBy: $orderBy
      filterBy: $filterBy
    ) {
      ...HotelFragment
    }
  }
  point(id: $id) @include(if: $isPoint) {
    id
    name
    slug
    latitude
    longitude
    hotels(
      adults: $adults
      children: $children
      checkin: $checkin
      checkout: $checkout
      orderBy: $orderBy
      filterBy: $filterBy
    ) {
      ...HotelFragment
    }
  }
  allCountries {
    id
    cities {
      id
      name
      slug
      country {
        id
        isoCode
        name
      }
    }
  }
}

fragment HotelFragment on AvailabilitiesManager {
      hotelsCount
      cheapestHotel {
        id
        pricing
        lastPricing
      }
      sortedHotels {
        id
        phone
        name
        recommended
        isRecommendedHotel
        isCorporate
        topRates
        slug
        available
        pricing
        lastPricing
        biosafetyCertificate
        priceSaving
        nightsNumber
        showPriceSaving
        includeBreakfast
        availableQuantity
        reviewsScore
        reviewClassification
        pricingWithAyendaCash
        latitude
        longitude
        photos {
          id
          url: mediumUrl
          alt
        }
        city {
          id
          slug
          country {
            id
            isoCode
          }
        }
        walkingDistanceText
        walkingDurationText
        drivingDurationText
        address
        amenities {
          id
          name
        }
      }
    }
`
export const GET_CITY_HISTORIES = gql`
  query CityHistories {
    cityHistories{
      id
      name
      slug
      firstPhoto{
				id
				url
				lazyUrl
				alt
			}
    }
  }
`
