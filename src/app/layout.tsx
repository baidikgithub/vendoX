import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import MainLayout from '../components/layout/MainLayout';
import './globals.css';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <MainLayout>
          {children}
        </MainLayout>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;