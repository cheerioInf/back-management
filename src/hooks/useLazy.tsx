import React, { Suspense, lazy } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const useLazy = (
  Components: Promise<{ default: React.ComponentType<any> }>
) => {
  const Lazy = lazy(() => Components);
  return () => (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spin indicator={antIcon} size="large" />
        </div>
      }
    >
      <Lazy />
    </Suspense>
  );
};

export default useLazy;
