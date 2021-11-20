const AUTH_API_KEY = process.env.AUTH_API_KEY; // old
export const VUE_APP_AUTH_API_KEY = process.env.VUE_APP_AUTH_API_KEY;

export const url =
  "https://seller-c8bcc-default-rtdb.europe-west1.firebasedatabase.app/";
export const authUrl =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
  AUTH_API_KEY;

export enum orderStatusesEnum {
  paidId = 2,
  shippedId = 4,
}

export const limitToFirst = 4;
