interface IUserData {
  name: string;
  email: string;
  password: string;
}

export async function encryptUserData(userdata: IUserData) {

    const msgUint8 = new TextEncoder().encode(userdata.password);                           // encode as (utf-8) Uint8Array
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);                // hash the message
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
    userdata.password = hashHex;
    localStorage.setItem(userdata.name, JSON.stringify(userdata));
  }

export async function checkUserPassword(password: string, passwordStorage: string) {

  const msgUint8 = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  return hashHex === passwordStorage ? true : false;
}
