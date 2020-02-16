import React, { Component } from 'react';
import {
    Empty
} from 'antd';
export const NotFoundPage = (props) => {
    return (
        <div style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            <h3>Page not found ;(</h3>
        </div>
    );
}