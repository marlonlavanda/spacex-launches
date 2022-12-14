export interface Launch {
  fairings: null;
  links: Object<{
    patch: Object;
  }>;
  static_fire_date_utc: String;
  static_fire_date_unix: 1583058000;
  tdb: Boolean;
  net: Boolean;
  window: Number;
  rocket: String;
  success: Boolean;
  failures: Array;
  details: String;
  crew: Array;
  ships: Array;
  capsules: Array;
  payloads: Array;
  launchpad: Array;
  auto_update: Boolean;
  flight_number: Number;
  name: String;
  date_utc: Date;
  date_unix: Number;
  date_local: Date;
  date_precision: String;
  upcoming: Boolean;
  cores: Array;
  id: String;
}

export type LaunchesResponseFromApi = Array<{
  fairings: null;
  links: Object;
  static_fire_date_utc: String;
  static_fire_date_unix: 1583058000;
  tdb: Boolean;
  net: Boolean;
  window: Number;
  rocket: String;
  success: Boolean;
  failures: Array;
  details: String;
  crew: Array;
  ships: Array;
  capsules: Array;
  payloads: Array;
  launchpad: Array;
  auto_update: Boolean;
  flight_number: Number;
  name: String;
  date_utc: Date;
  date_unix: Number;
  date_local: Date;
  date_precision: String;
  upcoming: Boolean;
  cores: Array;
  id: String;
}>;
