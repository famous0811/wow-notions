import React, { useCallback } from "react";
import GoogleLogin from "react-google-login";

const clientId =
  "597142321890-e7vfn7r2k8hnh62hslj577874t4ps9a0.apps.googleusercontent.com";

const LoginButton: React.FC = () => {
  const onSuccess = useCallback((response: any) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name },
    } = response;
  }, []);

  const onFailure = useCallback((error: any) => {
    console.log(error);
  }, []);

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default LoginButton;
