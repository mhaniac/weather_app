export interface GeolocationModel {
  type: string;
  query: number[];
  features: Feature[];
  attribution: string;
}

interface Feature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: Properties;
  text: string;
  place_name: string;
  center: number[];
  geometry: Geometry;
  context?: Context[];
  bbox?: number[];
}

interface Context {
  id: string;
  text: string;
  wikidata?: string;
  short_code?: string;
}

interface Geometry {
  coordinates: number[];
  type: string;
}

interface Properties {
  foursquare?: string;
  landmark?: boolean;
  address?: string;
  category?: string;
  wikidata?: string;
  short_code?: string;
}
