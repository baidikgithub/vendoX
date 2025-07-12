import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  ShoppingOutlined,
  TagsOutlined,
  GiftOutlined,
  UserOutlined,
  SettingOutlined,
  BarChartOutlined,
  FileTextOutlined,
  CustomerServiceOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Sider } = Layout;

interface SidebarProps {
  isDarkMode: boolean;
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, collapsed }) => {
  const menuItems: MenuProps['items'] = [
    {
      key: 'dashboard',
      icon: <HomeOutlined />,
      label: 'Dashboard',
    },
    {
      key: 'products',
      icon: <ShoppingOutlined />,
      label: 'Products',
      children: [
        {
          key: 'all-products',
          label: 'All Products',
        },
        {
          key: 'categories',
          label: 'Categories',
        },
        {
          key: 'inventory',
          label: 'Inventory',
        },
      ],
    },
    {
      key: 'orders',
      icon: <FileTextOutlined />,
      label: 'Orders',
      children: [
        {
          key: 'pending-orders',
          label: 'Pending Orders',
        },
        {
          key: 'completed-orders',
          label: 'Completed Orders',
        },
        {
          key: 'cancelled-orders',
          label: 'Cancelled Orders',
        },
      ],
    },
    {
      key: 'customers',
      icon: <UserOutlined />,
      label: 'Customers',
    },
    {
      key: 'promotions',
      icon: <GiftOutlined />,
      label: 'Promotions',
      children: [
        {
          key: 'discounts',
          label: 'Discounts',
        },
        {
          key: 'coupons',
          label: 'Coupons',
        },
        {
          key: 'flash-sales',
          label: 'Flash Sales',
        },
      ],
    },
    {
      key: 'analytics',
      icon: <BarChartOutlined />,
      label: 'Analytics',
      children: [
        {
          key: 'sales-analytics',
          label: 'Sales Analytics',
        },
        {
          key: 'customer-analytics',
          label: 'Customer Analytics',
        },
        {
          key: 'product-analytics',
          label: 'Product Analytics',
        },
      ],
    },
    {
      key: 'marketing',
      icon: <TagsOutlined />,
      label: 'Marketing',
      children: [
        {
          key: 'email-marketing',
          label: 'Email Marketing',
        },
        {
          key: 'social-media',
          label: 'Social Media',
        },
        {
          key: 'advertising',
          label: 'Advertising',
        },
      ],
    },
    {
      key: 'support',
      icon: <CustomerServiceOutlined />,
      label: 'Support',
      children: [
        {
          key: 'tickets',
          label: 'Support Tickets',
        },
        {
          key: 'faq',
          label: 'FAQ',
        },
        {
          key: 'live-chat',
          label: 'Live Chat',
        },
      ],
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      children: [
        {
          key: 'general-settings',
          label: 'General Settings',
        },
        {
          key: 'payment-settings',
          label: 'Payment Settings',
        },
        {
          key: 'shipping-settings',
          label: 'Shipping Settings',
        },
        {
          key: 'tax-settings',
          label: 'Tax Settings',
        },
      ],
    },
    {
      key: 'help',
      icon: <InfoCircleOutlined />,
      label: 'Help & Docs',
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        background: isDarkMode ? '#001529' : '#fff',
        borderRight: `1px solid ${isDarkMode ? '#303030' : '#f0f0f0'}`,
      }}
      width={250}
    >
      <div style={{ 
        height: '64px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderBottom: `1px solid ${isDarkMode ? '#303030' : '#f0f0f0'}`,
        background: isDarkMode ? '#001529' : '#fff'
      }}>
        {!collapsed && (
          <h2 style={{ 
            margin: 0, 
            color: isDarkMode ? '#fff' : '#1890ff',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Admin Panel
          </h2>
        )}
      </div>
      <Menu
        theme={isDarkMode ? 'dark' : 'light'}
        mode="inline"
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['products', 'orders']}
        items={menuItems}
        style={{
          borderRight: 'none',
          background: isDarkMode ? '#001529' : '#fff'
        }}
      />
    </Sider>
  );
};

export default Sidebar; 