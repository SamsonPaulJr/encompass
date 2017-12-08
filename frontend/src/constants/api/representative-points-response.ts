/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Response shape for POST /api/representative_points/
 */
export type PostRepresentativePointsResponse = {
  county: string
  census_tract: number
  id: number
  lat: number
  lng: number
  population: {
    '0.5': number
    '2.5'?: number
    '5.0'?: number
  }
  service_area_id: string
  zip: string
}[]