import React from 'react';
import { Layout, Input, Button, Badge, Space, Avatar, Dropdown } from 'antd';
import { 
  SearchOutlined, 
  ShoppingCartOutlined, 
  UserOutlined,
  SunOutlined,
  MoonOutlined,
  HeartOutlined,
  BellOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header: AntHeader } = Layout;

interface HeaderProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onThemeToggle }) => {
  const userMenuItems: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <UserOutlined />,
    },
    {
      key: 'orders',
      label: 'My Orders',
    },
    {
      key: 'wishlist',
      label: 'Wishlist',
      icon: <HeartOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: 'Logout',
    },
  ];

  return (
    <AntHeader style={{ 
      background: isDarkMode ? '#001529' : '#fff',
      borderBottom: `1px solid ${isDarkMode ? '#303030' : '#f0f0f0'}`,
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '64px'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ 
          margin: 0, 
          color: isDarkMode ? '#fff' : '#1890ff',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          VendoX
        </h1>
      </div>

      {/* Search Bar */}
      <div style={{ flex: 1, maxWidth: '500px', margin: '0 48px' }}>
        <Input
          placeholder="Search products..."
          prefix={<SearchOutlined />}
          size="large"
          style={{
            borderRadius: '20px',
            background: isDarkMode ? '#1f1f1f' : '#f5f5f5'
          }}
        />
      </div>

      {/* Right Side Actions */}
      <Space size="large">
        {/* Theme Toggle */}
        <Button
          type="text"
          icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
          onClick={onThemeToggle}
          style={{ color: isDarkMode ? '#fff' : '#000' }}
        />

        {/* Notifications */}
        <Badge count={3}>
          <Button
            type="text"
            icon={<BellOutlined />}
            style={{ color: isDarkMode ? '#fff' : '#000' }}
          />
        </Badge>

        {/* Wishlist */}
        <Badge count={5}>
          <Button
            type="text"
            icon={<HeartOutlined />}
            style={{ color: isDarkMode ? '#fff' : '#000' }}
          />
        </Badge>

        {/* Cart */}
        <Badge count={2}>
          <Button
            type="text"
            icon={<ShoppingCartOutlined />}
            style={{ color: isDarkMode ? '#fff' : '#000' }}
          />
        </Badge>

        {/* User Menu */}
        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
          <Avatar 
            icon={<UserOutlined />} 
            style={{ 
              cursor: 'pointer',
              background: isDarkMode ? '#1890ff' : '#1890ff'
            }}
          />
        </Dropdown>
      </Space>
    </AntHeader>
  );
};

export default Header; 