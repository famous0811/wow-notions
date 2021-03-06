import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import * as config from "../../config";
import "./layout.scss";
import useStore from "../../store";

interface LayoutProps {
  children?: React.ReactChild;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title = "mininotion" }) => {
  const userStore = useStore.UserStore;
  const onSuccess = useCallback((response: any) => {
    const {
      profileObj: { email, name },
    } = response;

    userStore.SetToken(response.access_token);
    userStore.setUser(name, email);

    window.location.reload();
  }, []);
  const onLogout = useCallback(() => {
    userStore.LogOut();
    window.location.reload();
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <header>
        <h3>miniNotion</h3>
        {!userStore.token ? (
          <GoogleLogin
            clientId={config.CLIENTID}
            responseType={"id_token"}
            onSuccess={onSuccess}
            render={(renderprops) => (
              <button onClick={renderprops.onClick}>Login</button>
            )}
          />
        ) : (
          <GoogleLogout
            clientId={config.CLIENTID}
            onLogoutSuccess={onLogout}
            render={(renderprops) => (
              <button onClick={renderprops.onClick}>Logout</button>
            )}
          />
        )}
      </header>
      <article>{children}</article>
    </>
  );
};

export default Layout;
