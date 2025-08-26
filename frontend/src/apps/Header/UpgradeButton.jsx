// import { Avatar, Popover, Button, Badge, Col, List } from 'antd';

// // import Notifications from '@/components/Notification';

// import { RocketOutlined } from '@ant-design/icons';

// import useLanguage from '@/locale/useLanguage';

// export default function UpgradeButton() {
//   const translate = useLanguage();

//   return (
//     <Badge count={1} size="small">
//       <Button
//         type="primary"
//         style={{
//           float: 'right',
//           marginTop: '5px',
//           cursor: 'pointer',
//           background: '#16923e',
//           boxShadow: '0 2px 0 rgb(82 196 26 / 20%)',
//         }}
//         icon={<RocketOutlined />}
//         onClick={() => {
//           window.open(`https://entreprise.idurarapp.com`);
//         }}
//       >
//         {/* {translate('Try Entreprise')} */}
//       </Button>
//     </Badge>
//   );
// }

// console.log(
//   '🚀 Welcome to IDURAR ERP CRM! Did you know that we also offer commercial customization services? Contact us at hello@idurarapp.com for more information.'
// );

import { Popover, Button, Badge } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import useLanguage from '@/locale/useLanguage';

export default function UpgradeButton() {
  const translate = useLanguage();

  const content = (
    <div style={{ maxWidth: 220 }}>
      <p><strong>CapitalEdge</strong></p>
      <p>
        This is your all-in-one Finance CRM + ERP.  
        More exciting features are coming soon 🚀
      </p>
    </div>
  );

  return (
    <Badge count={1} size="small">
      <Popover placement="bottomRight" content={content} trigger="click">
        <Button
          type="primary"
          style={{
            float: 'right',
            marginTop: '5px',
            cursor: 'pointer',
            background: '#16923e',
            boxShadow: '0 2px 0 rgb(82 196 26 / 20%)',
          }}
          icon={<RocketOutlined />}
        >
          {translate('CapitalEdge')}
        </Button>
      </Popover>
    </Badge>
  );
}

console.log(
  '🚀 Welcome to CapitalEdge ERP CRM! All features are active. Stay tuned for updates.'
);
