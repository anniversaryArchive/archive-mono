import { Typography } from "antd";
import { TextProps } from "antd/es/typography/Text";

export default function Text(props: TextProps) {
  return <Typography.Text {...props} />;
}
