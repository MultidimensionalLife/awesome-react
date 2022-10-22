import axios from "axios";

import { GRANT_TYPE, CLIENT_ID, BASE_URL } from "../constants/config";

/**
 * Authenticate user
 * @param {*} username
 * @param {*} password
 * @returns Promise
 */
export const authenticate = (username, password) => {
  return axios.post(
    "auth/realms/ds_core/protocol/openid-connect/token",
    {
      username,
      password,
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
    },
    {
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
};
