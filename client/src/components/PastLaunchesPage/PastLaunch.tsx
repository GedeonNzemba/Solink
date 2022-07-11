import { useQuery } from '@apollo/client';
import React from 'react'
import { PastLaunchesPage } from '../../api/query';
import Loader from '../../loader/Loader';
import { TITLES } from '../../utils/enum'
import { InventoryVars, LaunchesPastInventoryData } from '../../utils/types';
import Body from '../table/Body';
import Head from '../table/Head';
import Title from '../titles/Title'

const PastLaunch = () => {

  const { loading, error, data } = useQuery<LaunchesPastInventoryData, InventoryVars>(PastLaunchesPage,{
    variables: {
      limit: 20,
    }
  }
  );

  return (
    <>
      {loading ? <Loader />
      :
      (
        <section className="bg-white mt-32 lg:py-[120px]">
            <Title name={TITLES.PAST_LAUNCHES_TABLE} />
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="max-w-full overflow-x-auto">

                  {data && (
                    <table className="table-auto w-full">
                      <Head />
                      <Body launchesPast={data.launchesPast} />
                    </table>
                  )}

                </div>
              </div>
            </div>
          </section>
      )}
    </>
  )
}

export default PastLaunch