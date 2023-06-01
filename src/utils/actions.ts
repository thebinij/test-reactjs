import { API } from "./constants";

export const loginRequest = async (
  login_id: string,
  login_password: string,
  ip_address: string
): Promise<any> => {
  const body = JSON.stringify({ login_id, login_password, ip_address });

  return await fetch(`${API}/config/v1/auths/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  }).then((t) => t.json());
};

export const getData = async (token: string): Promise<any> => {
  return await fetch(`${API}/transaction-manager/v1/admin/dashboard/search`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((t) => t.json());
};
