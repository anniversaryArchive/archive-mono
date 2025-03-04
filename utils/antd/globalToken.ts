import { ConfigProviderProps } from "antd";

// TODO: #1 PR 병합 후 ~/context/global로 변경
import { PRIMARY_COLOR } from "../../contexts/global";

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
