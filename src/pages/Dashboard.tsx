import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../utils/actions";
import { Data } from "../utils/types";

export default function Dashboard({ user }: any) {
  console.log(user)
  const [data, setData] = useState<Data[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user)
    if (user) {
      const token = user.jwt_token;

      (async () => {
        const res = await getData(token);
        if (res.success) {
          setData(res.data);
        }
        console.log(data);
      })();
    }
    else{
      navigate("/");
    }
  }, []);

  return (
    <div className="relative overflow-x-auto p-4">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Current Status
            </th>
            <th scope="col" className="px-6 py-3">
              Receive Amount/受取金額
            </th>
            <th scope="col" className="px-6 py-3">
              Receive Country/受取国
            </th>
            <th scope="col" className="px-6 py-3">
              Send Amount/送金額
            </th>
            <th scope="col" className="px-6 py-3">
              Send Country/送金国
            </th>
            <th scope="col" className="px-6 py-3">
              Sender Full Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-6 py-4">{item["Current Status"]}</td>
              <td className="px-6 py-4">{item["Receive Amount/受取金額"]}</td>
              <td className="px-6 py-4">{item["Receive Country/受取国"]}</td>
              <td className="px-6 py-4">{item["Send Amount/送金額"]}</td>
              <td className="px-6 py-4">{item["Send Country/送金国"]}</td>
              <td className="px-6 py-4">{item["Sender Full Name"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}
