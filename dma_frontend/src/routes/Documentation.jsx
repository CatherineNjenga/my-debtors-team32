import React from 'react';
import DocumentationComp from '../components/DocumentationComp';
import DashboardSideNav from '../components/layout/DashboardSideNav';

import { useMount } from 'react-use';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Documentation = () => {
  let navigate = useNavigate();

  const [cookies] = useCookies(['dma-cookies']);
  const handleRole = async () => {
    try {
      const token = cookies['dma-cookies'];
      const result1 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/dj-rest-auth/user/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      const result2 = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/r/school/${result1?.data?.pk}/`,
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      return result2?.data;
    } catch (error) {
      return error;
    }
  };
  useMount(async () => {
    const result = await handleRole();
    // console.log('result :>> ', result.message);
    if (cookies['dma-cookies'] && result?.message) {
      navigate('/contend');
    } else if (!cookies['dma-cookies']) {
      navigate('/signin');
    }
  });

  return (
    <div>
      <div className='tw-flex tw-flex-col tw-space-x-4 lg:tw-flex-row'>
        {/* sidebar */}
        <div className=''>
          <DashboardSideNav />
        </div>

        <div className='tw-pt-4'>
          <DocumentationComp />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
