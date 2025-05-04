export interface SearchResponse {
    type: string;
    licence: string;
    features: Feature[];
}

export interface Feature {
    type: string;
    properties: Properties;
    bbox: number[];
    geometry: Geometry;
}

export interface Geometry {
    type: string;
    coordinates: Array<Array<number[]> | number>;
}

export interface Properties {
    place_id: number;
    osm_type: string;
    osm_id: number;
    place_rank: number;
    category: string;
    type: string;
    importance: number;
    addresstype: string;
    name: string;
    display_name: string;
    address: Address;
    namedetails: { [key: string]: string };
}

export interface Address {
    district?: string;
    municipality?: string;
    state: string;
    "ISO3166-2-lvl4": string;
    country: string;
    country_code: string;
    volcano?: string;
    city?: string;
}
