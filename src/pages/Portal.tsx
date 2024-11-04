// import { useNavigate } from 'react-router-dom';

import { mockColumns } from '@/components/custom/tables/Columns/mock';
import DataTable from '@/components/custom/tables/Table';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/core/store/useAuth';
import { signOut, siteMap } from '@/core/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';

function PortalPage() {
  // const navigate = useNavigate();

  // all the routes are stored in the siteMap object as key-value pairs
  // set link for link btn to navigate page by siteMap key
  const accountPlanningLink = Object.entries(siteMap.accountPlanning).map(
    ([key, value]) => ({
      name: key,
      link: value,
    }),
  );

  const [mockData, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
    setData(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const customerInformationLink = Object.entries(
    siteMap.customerInformation,
  ).map(([key, value]) => ({
    name: key,
    link: value,
  }));

  const user = useAuth();
  console.log(user);
  return (
    <>
      <div className="m-4 flex flex-wrap gap-4 [&>div]:rounded-sm [&>div]:bg-black [&>div]:p-4 [&>div]:text-white">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">account planning portal</h2>
          {accountPlanningLink.map(v => {
            return (
              <a className="hover:scale-105" key={v.name} href={v.link}>
                {v.name}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold">customer information portal</h2>
          {customerInformationLink.map(v => {
            return (
              <a className="hover:scale-105" key={v.name} href={v.link}>
                {v.name}
              </a>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Report portal</h2>
          <a className="hover:scale-105" href={siteMap.report.index}>
            Report
          </a>
        </div>
      </div>

      <div>
        <DataTable data={mockData} columns={mockColumns} />
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => {
            signOut();
            window.location.reload();
          }}
        >
          logout
        </Button>
      </div>
    </>
  );
}

export default PortalPage;
