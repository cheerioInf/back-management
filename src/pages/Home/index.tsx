import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MainMenu from "@/components/MainMenu";
import styles from "./index.module.scss";

const { Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={styles.menuTitle}>通用管理系统模版</div>
        <MainMenu />
      </Sider>
      <Layout className="site-layout">
        <div className={styles.header} />
        <Content style={{ margin: "0 16px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          General Management System ©2022
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
