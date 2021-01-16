// To parse this data:
//
//   import { Convert, APILoginData } from "./file";
//
//   const aPILoginData = Convert.toAPILoginData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export type APILoginData = {
  state:   number;
  message: string;
  data:    Data;
}

export type Data = {
  authorities:   any[];
  details:       Details;
  authenticated: boolean;
  principal:     Principal;
  credentials:   null;
  name:          string;
}

export type Details = {
  remoteAddress: string;
  sessionId:     null;
}

export type Principal = {
  id:                    number;
  loginNumber:           string;
  nickName:              string;
  familyName:            null;
  givenName:             null;
  googleId:              null;
  googleEmail:           null;
  picture:               string;
  phone:                 null;
  password:              string;
  loginTime:             null;
  type:                  number;
  enabled:               boolean;
  username:              string;
  authorities:           null;
  credentialsNonExpired: boolean;
  accountNonLocked:      boolean;
  accountNonExpired:     boolean;
}
