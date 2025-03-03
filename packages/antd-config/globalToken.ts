import { ConfigProviderProps } from "antd";

const globalToken: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: "#006242",
      colorLink: "#006242",
      fontFamily: "HakgyoansimAllimjangTTF",
      fontSize: 16,
    },
    components: { Button: { primaryShadow: "0 2px 0 #00624220" } },
  },
};

export default globalToken;
