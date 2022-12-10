import { Button, Input, Space } from "antd";
import { ChangeEvent, useState } from "react";
import styles from "./index.module.scss";

const LoginBox = () => {
  const [userName, setUserName] = useState("");
  const userChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const [password, setPassword] = useState("");
  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.box}>
      <div className={styles.title}>通用管理系统模版</div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Input placeholder="用户名" onChange={userChangeHandler} />
        <Input.Password placeholder="密码" onChange={passwordChangeHandler} />
        <Button type="primary" block={true}>
          登陆
        </Button>
      </Space>
    </div>
  );
};

export default LoginBox;
