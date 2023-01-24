import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function Home() {
  const { logout, authorization } = useAuthContext();
  return (
    <>
      <h1>This is the home</h1>
      {authorization && <button onClick={logout}>Log out</button>}
    </>
  );
}
