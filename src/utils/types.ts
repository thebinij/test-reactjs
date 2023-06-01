export interface User {
  full_name: string;
  agent_name: string;
  id: string;
  profile_picture: string;
  jwt_token: string;
  token_key: string;
  token_key_expires_on: string;
}

export interface Data {
  "Current Status": string;
  Parking: string;
  "Receive Amount/受取金額": string;
  "Receive Country/受取国": string;
  "Send Amount/送金額": string;
  "Send Country/送金国": string;
  "Sender Full Name": string;
  id: string;
}
