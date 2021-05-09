import React, { useContext } from "react";
import { Context } from "../Context";


function Login() {
  const { user, setUser } = useContext(Context);

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            // call logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            //const user = await login();
            setUser("asif");
          }}
        >
          login
        </button>
      )}
    </div>
  );
}
export default Login;