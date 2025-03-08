import { ConfigProviderProps } from "antd";

import { PRIMARY_COLOR } from "../global";

const globalToken: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: PRIMARY_COLOR,
      colorLink: PRIMARY_COLOR,
      fontFamily: "HakgyoansimAllimjangTTF",
      fontSize: 16,
    },
    components: { Button: { primaryShadow: `0 2px 0 ${PRIMARY_COLOR}20` } },
  },
};

export default globalToken;
