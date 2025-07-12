"use client";

import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import Header from './Header';
import Sidebar from './Sidebar';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar isDarkMode={isDarkMode} collapsed={collapsed} />
      <Layout>
        <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: isDarkMode ? '#141414' : '#fff',
            borderRadius: '8px',
            border: `1px solid ${isDarkMode ? '#303030' : '#f0f0f0'}`,
          }}
        >
          {/* Collapse Button */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={toggleCollapsed}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              position: 'absolute',
              top: '80px',
              left: collapsed ? '80px' : '270px',
              zIndex: 1000,
              background: isDarkMode ? '#001529' : '#fff',
              border: `1px solid ${isDarkMode ? '#303030' : '#f0f0f0'}`,
              borderRadius: '6px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              color: isDarkMode ? '#fff' : '#000',
            }}
          />
          
          {/* Main Content */}
          <div style={{ 
            marginTop: '20px',
            color: isDarkMode ? '#fff' : '#000'
          }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout; 