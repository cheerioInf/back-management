// 左边菜单栏组件
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("首页", "/abstract", <PieChartOutlined />),
  getItem("数据", "data", <UserOutlined />, [
    getItem("数据1", "/data/first"),
    getItem("数据2", "/data/second"),
    getItem("数据3", "/data/third"),
  ]),
  getItem("分析", "analyse", <TeamOutlined />, [
    getItem("分析1", "/analyse/first"),
    getItem("分析2", "/analyse/second"),
  ]),
  getItem("关于", "/about", <DesktopOutlined />),
];

const MainMenu = () => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  // 设置菜单栏展开状态
  const getOpenFirst = () => {
    let openString = "";
    const jurgeLocation = (item: { key: string }) => {
      // console.log(item.key, currentLocation.pathname);
      return item.key === currentLocation.pathname;
    };

    items.forEach((item: any) => {
      // console.log(item);
      item &&
        item.children !== undefined &&
        item.children.forEach((son: any) => {
          if (jurgeLocation(son)) {
            openString = item.key;
          }
        });
    });
    return openString;
  };
  const [openKeys, setOpenKeys] = useState([getOpenFirst()]);

  // 点击跳转路由
  const clickHandler = (e: { key: string }) => {
    navigate(e.key);
  };

  // 切换展开栏，只允许一个展开
  const openChangeHandler = (keys: string[]) => {
    setOpenKeys([keys[keys.length - 1]]);
  };

  return (
    <Menu
      theme="light"
      defaultSelectedKeys={[currentLocation.pathname]}
      mode="inline"
      items={items}
      onClick={clickHandler}
      onOpenChange={openChangeHandler}
      openKeys={openKeys}
    />
  );
};

export default MainMenu;
