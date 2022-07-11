import React from 'react'
import { useQuery } from '@apollo/client';
import { PastLaunchesPage } from '../../api/query';
import Loader from '../../loader/Loader';
import { TITLES } from '../../utils/enum'
import { InventoryVars, LaunchesPastInventoryData } from '../../utils/types';
import Body from '../table/Body';
import Head from '../table/Head';
import Table from '../table/Table';
import Title from '../titles/Title'

const PastLaunch = () => {

  const { loading, error, data } = useQuery<LaunchesPastInventoryData, InventoryVars>(PastLaunchesPage, {
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
          <section className="bg-white mt-32 mb-20  lg:py-[120px]">
            <Title name={TITLES.PAST_LAUNCHES_TABLE} />
            <Table >
              {data && (
                <>
                  <Head secondary />
                  <Body launchesPast={data.launchesPast} />
                </>
              )}
            </Table>
          </section>
        )}
    </>
  )
}

export default PastLaunch