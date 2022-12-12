import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined
} from "@ant-design/icons";

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}
// 此处配置左侧菜单项
export const items = [
  getItem("Option 1", "/test001", <PieChartOutlined />),
  getItem("Option 2", "/test002", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "/test003"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
];
