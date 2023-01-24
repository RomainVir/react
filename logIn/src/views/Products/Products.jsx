import { useAuthContext } from "../../context/AuthContext/AuthContext";
export default function Products() {
  const { logout } = useAuthContext();
  return (
    <>
      <h1>This is the products</h1>
      <button onClick={logout}>Log out</button>
    </>
  );
}
