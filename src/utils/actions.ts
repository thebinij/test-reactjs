
// interface UserCredential {
//     login_id: string;
//     login_password: string;
//     ip_address?: string;
// }

import { API } from "./constants";


export const loginRequest = async (
    login_id: string,
    login_password: string,
    ip_address: string,
  ): Promise<any> => {

    console.log(login_id,login_password)
    const body = JSON.stringify({ login_id, login_password, ip_address});
  
    return await fetch(`${API}/auths/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body,
    }).then((t) => t.json());
  };