import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/dashboard.css';
import notification from '../images/notification.svg';
import axios from 'axios';
// import DashboardSideNav from './layout/DashboardSideNav';
import { useQuery } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';
import Table from 'react-bootstrap/Table';

const DashboardComp = () => {
  const [cookies] = useCookies(['dma-cookies']);

  const token = cookies['dma-cookies'];

  const dahsboardList = async () => {
    const news = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/r/dashboard/`,
      {
        headers: { Authorization: `Token ${token}` },
      }
    );
    // console.log(news);
    return news.data;
  };
  const { data, isSuccess } = useQuery(['todos'], dahsboardList);

  console.log('info :>> ', data);

  return (
    <div className='dashboardInfo'>
      {/* main content */}
      {/* <div>sidebar</div> */}
      <div className='dash'>
        <div className='dashboard__header'>
          <h1 className='text__1'>
            Welcome <br />{' '}
            <span className='text--2'>
              to Apata Memorial High School Dashboard!
            </span>
          </h1>
          <div className='dashbord__notify'>
            <img className='notify__icon' src={notification} alt='img1' />
            <h3 className='notify__text'>My Debtors</h3>
            {/* <h4 className='notify__num'>{}</h4> */}
          </div>
        </div>
        <hr />
        <div className='mytable'>
          {isSuccess && (
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name of student</th>
                  <th>Amount Owed</th>
                  <th>Payment status</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr>
                  <td>1</td>
                  {data.map((debts) => (
                    <td>{debts}</td>
                  ))}
                </tr> */}
                {/* {data.map((debt) => (
                  <tr key={debt.id}>
                    <td>Table cell {debt}</td>
                  </tr>
                ))} */}
                {data.map((onedebt) => {
                  return (
                    <tr key={onedebt.id}>
                      <td>{onedebt.id}</td>
                      <td>{onedebt.name_of_student}</td>
                      <td>{onedebt.amount_owed}</td>
                      <td>{onedebt.status}</td>
                    </tr>
                  );
                })}
                {/* <tr>
                  <td>2</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr> */}
                {/* <tr>
                  <td>3</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr> */}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
