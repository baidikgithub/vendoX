import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { ShoppingOutlined, UserOutlined, DollarOutlined, FileTextOutlined } from '@ant-design/icons';

const Home = () => {
  return (
    <div>
      <h1 style={{ marginBottom: '24px' }}>Dashboard</h1>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Products"
              value={1128}
              prefix={<ShoppingOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Customers"
              value={93}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={11280}
              prefix={<DollarOutlined />}
              suffix="USD"
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Orders"
              value={93}
              prefix={<FileTextOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
        <Col xs={24} lg={12}>
          <Card title="Recent Orders" style={{ height: '400px' }}>
            <p>Recent orders will be displayed here...</p>
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Top Products" style={{ height: '400px' }}>
            <p>Top selling products will be displayed here...</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;