// import { Button, Result } from 'antd';

// import useLanguage from '@/locale/useLanguage';

// const About = () => {
//   const translate = useLanguage();
//   return (
//     <Result
//       status="info"
//       title={'IDURAR'}
//       subTitle={translate('Do you need help on customize of this app')}
//       extra={
//         <>
//           <p>
//             Website : <a href="https://www.idurarapp.com">www.idurarapp.com</a>{' '}
//           </p>
//           <p>
//             GitHub :{' '}
//             <a href="https://github.com/idurar/capitaledge">
//               https://github.com/idurar/capitaledge
//             </a>
//           </p>
//           <Button
//             type="primary"
//             onClick={() => {
//               window.open(`https://www.idurarapp.com/contact-us/`);
//             }}
//           >
//             {translate('Contact us')}
//           </Button>
//         </>
//       }
//     />
//   );
// };

// export default About;

import { Button, Result } from 'antd';
import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();

  return (
    <Result
      status="info"
      title={'CapitalEdge'}
      subTitle={translate(
        'CapitalEdge is a modern Finance CRM + ERP software designed to help businesses streamline operations, manage customers, and optimize financial workflows with ease.'
      )}
      extra={
        <>
          <p>
            Website : <a href="https://www.capitaledgeapp.com">www.capitaledgeapp.com</a>
          </p>
          <p>
            GitHub :{' '}
            <a href="https://github.com/capitaledge/capitaledge-erp-crm">
              https://github.com/capitaledge/capitaledge-erp-crm
            </a>
          </p>
          <p>
            Documentation :{' '}
            <a href="https://docs.capitaledgeapp.com">
              https://docs.capitaledgeapp.com
            </a>
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://www.capitaledgeapp.com/contact-us/`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;

