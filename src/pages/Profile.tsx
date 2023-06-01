import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Profile({ user, setUser }: any) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("userCredentials");
    setUser(undefined);
    toast("Logout Success!")
    navigate("/landing");
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="flex justify-center flex-col text-center items-center gap-4">
      <h1 className="text-xl font-semibold mt-4">User Profile</h1>
      <span>Name : {user.full_name}</span>
      <div className=" max-w-sm">
        <button
          type="button"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
