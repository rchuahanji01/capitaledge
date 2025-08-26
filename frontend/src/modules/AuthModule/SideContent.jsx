import { Space, Layout, Divider, Typography } from 'antd';
import logo from '@/style/images/logo.jpg';
import useLanguage from '@/locale/useLanguage';
import { useSelector } from 'react-redux';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  const translate = useLanguage();

  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '450px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%'  }}>
        <img
          src={logo}
          alt="CAPITALEDGE"
          style={{ height:"140px", display: 'block' }}
          height={63}
          width={220}
        />

        <Title level={1} style={{ fontSize: 28 }}>
            Welcome to CapitalEdge  Your Finance, Simplified
        </Title>
        <Text>
           End-to-End Finance & Accounting Tools
        </Text>

        <div className="space20"></div>
      </div>
    </Content>
  );
}
