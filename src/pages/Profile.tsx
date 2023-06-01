import { Navigate } from "react-router";

export default function Profile({ user }: any) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="flex justify-center flex-col text-center gap-4">
      <h1 className="text-xl font-semibold mt-4">User Profile</h1>
      <span>Name : {user.full_name}</span>
    </div>
  );
}
