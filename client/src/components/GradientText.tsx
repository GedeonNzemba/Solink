import React from 'react'
import { useQuery } from '@apollo/client';
import { NextLaunch, PastLaunchesPage, UpcomingLaunchesTable } from '../api/query';
import { LaunchesUpcomingInventoryData, InventoryVars, LaunchesPastInventoryData } from '../utils/types';


type Props = {
  text: string;
};
  
const GradientText = ({ text }: Props) => {

  //const { loading, error, data } = useQuery(NextLaunch);

  // const { loading, error, data } = useQuery<LaunchesUpcomingInventoryData, InventoryVars>(UpcomingLaunchesTable,{ 
  //   variables: { 
  //     limit: 10,
  //   } 
  // }
  // );

  const { loading, error, data } = useQuery<LaunchesPastInventoryData, InventoryVars>(PastLaunchesPage,{ 
    variables: { 
      limit: 20,
    } 
  }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

 

    return (
      <div className="p-10 min-h-screen flex items-center justify-center bg-cool-gray-700">
        <h1 className="text-9xl font-black text-white text-center">
          <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">
            {text}
          </span>
        </h1>
        <pre>{!loading && JSON.stringify(data, null, 2)}</pre>
      </div>
    );
};

export default GradientText