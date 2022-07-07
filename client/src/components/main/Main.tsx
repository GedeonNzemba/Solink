import React from 'react'
import { useQuery } from '@apollo/client';
import { NextLaunch, PastLaunchesPage, UpcomingLaunchesTable } from '../../api/query';
import { LaunchesUpcomingInventoryData, InventoryVars, LaunchesPastInventoryData } from '../../utils/types';
import Loader from '../../loader/Loader';


type Props = {
  text: string;
};

const GradientText = ({ text }: Props) => {

  const { loading, error, data } = useQuery(NextLaunch);

  // const { loading, error, data } = useQuery<LaunchesUpcomingInventoryData, InventoryVars>(UpcomingLaunchesTable,{ 
  //   variables: { 
  //     limit: 10,
  //   } 
  // }
  // );

  // const { loading, error, data } = useQuery<LaunchesPastInventoryData, InventoryVars>(PastLaunchesPage,{ 
  //   variables: { 
  //     limit: 20,
  //   } 
  // }
  // );

  if (error) return <p>Error : {error.message}</p>;



  return (
    <>
      {loading ? <Loader />
        :
        (
          <div className="p-10 min-h-screen flex items-center justify-center bg-cool-gray-700">

            <h6 className="text-lg font-black text-white text-center">
              <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">
                {text}
              </span>
            </h6>
            <pre>{!loading && JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
    </>
  );
};

export default GradientText