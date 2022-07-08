/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { NextLaunchsUpcoming, PastLaunchesPage } from "../../api/query";
import { LaunchesUpcomingInventoryData, InventoryVars, LaunchesPastInventoryData, DATA, Inventory, LaunchNextInventoryData } from "../../utils/types";
import Loader from "../../loader/Loader";
import Head from "../table/Head";
import Body from "../table/Body";
import Title from "../titles/Title";
import { TITLES } from "../../utils/enum";

interface LaunchSite {
  site_name: string;
}
interface RocketInventory {
  mission_name: string;
  launch_date_local: string;
  launch_site: LaunchSite;
}

interface RocketInventoryVars {
  limit: number;
}

interface RocketInventoryData {
  launchNext: RocketInventory
  launchesUpcoming: RocketInventory[];
}

const Main = () => {

  // const [launchNext, setLaunchNext] = useState<[string, RocketInventory][]>([])
  // const [launchesUpcoming, setLaunchesUpcoming] = useState<RocketInventory[]>([])

  const { loading, data } = useQuery<RocketInventoryData, RocketInventoryVars>(NextLaunchsUpcoming, {
    variables: {
      limit: 10
    }
  });

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

  // if (error) {
  //   console.log("error =>>", error.message)
  // }

  // let Arr: { data: RocketInventory; }[] = [];

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="bg-white py-20 lg:py-[120px]">
            <Title name={TITLES.NEXT_LAUNCH} />
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="max-w-full overflow-x-auto">

                  {data && (
                    <table className="table-auto w-full">
                      <Head />
                      <Body values={data.launchNext} />
                    </table>
                  )}

                </div>
              </div>
            </div>
          </section>

          <section className="bg-white py-20 lg:py-[120px]">
            <Title name={TITLES.UpCOMMING_LAUNCHES_TABLE} />
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="max-w-full overflow-x-auto">

                  {data && (
                    <table className="table-auto w-full">
                      <Head />
                      <Body launchesUpcoming={data.launchesUpcoming} />
                    </table>
                  )}

                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Main;
