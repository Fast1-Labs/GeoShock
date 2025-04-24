export type LocationType = {
  latitude: number;
  longitude: number;
  city?: string;
  region?: string;
  country?: string;
};

export type Earthquake = {
  id: string;
  properties: {
    mag: number;
    place: string;
    time: Date;
  };
};

export type LatestQuakeLocation = {
  geometry: {
    coordinates: any[];
  };
  properties: {
    city?: string;
    mag: number;
    region?: string;
    country?: string;
    place?: string;
  };
};
