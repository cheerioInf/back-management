import React, { Suspense, lazy } from "react"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const useLazy = (Components: Promise<{ default: React.ComponentType<any> }>) => {
    const Lazy = lazy(() => Components)
    return () => (
        <Suspense fallback={<Spin indicator={antIcon} />}>
            <Lazy/>
        </ Suspense>
    )
}

export default useLazy