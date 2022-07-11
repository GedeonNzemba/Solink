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
import moment, { duration } from 'moment-timezone';
import { setInterval } from "timers/promises";
import Table from "../table/Table";

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

interface State {
  hours: number;
}

const DEFAULT_STATE: State = {
  hours: 0
}

const Main = () => {

  // const [launchNext, setLaunchNext] = useState<[string, RocketInventory][]>([])
  // const [launchesUpcoming, setLaunchesUpcoming] = useState<RocketInventory[]>([])
  const [state, setState] = useState<State>({ ...DEFAULT_STATE })

  const { loading, data } = useQuery<RocketInventoryData, RocketInventoryVars>(NextLaunchsUpcoming, {
    variables: {
      limit: 10
    }
  });


  // CONVERTED TO LOCAL TIME DONE &  DISPLAYING REMAINING IN HOURS
  const convertToLocalTime = (localDate: string) => {
    // const date = moment.utc(localDate).format();
    // console.log(date, "- now in UTC");
    // const local = moment.utc(date).local().format();
    // console.log(local, "- UTC now to local");

    let time = moment(localDate);
    time.tz('Africa/Johannesburg').format('ha z');
    console.log("- local past timezone", time.hour());
    const now = moment();
    console.log("- local now timezone", now.hour());

    let remaining = time.hour() - now.hour();
    console.log("- remaining hour", remaining);

    setState(prevState => ({ ...prevState, hours: remaining }));
  }



  useEffect(() => {
    if (!!data) {
      convertToLocalTime(data.launchNext?.launch_date_local)
    }

    // window.setInterval(() => {
    //   calcTimer()
    // }, 1000)
  }, [data])


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>

          <section className="bg-white mt-32 mb-20  lg:py-[120px]">
            <div className="flex flex-wrap justify-center space-x-2">
              <span
                className="px-4 py-2 rounded-full capitalize text-SOLINK_BLUE bg-SOLINK_NYANZA text-sm flex align-center w-max cursor-pointer active:text-SOLINK_NYANZA active:bg-SOLINK_GREEN transition duration-300 ease">
                in about
              </span>
              <span
                className="px-4 py-2 rounded-full text-SOLINK_NYANZA bg-SOLINK_BLUE text-sm flex align-center w-max cursor-pointer active:text-SOLINK_NYANZA active:bg-SOLINK_GREEN transition duration-300 ease">
                {state.hours} {' '} hours
              </span>
            </div>
            <Title name={TITLES.NEXT_LAUNCH} />
            <Table borderDoubled>
              {data && (
                <>
                  <Head borderDoubled primary />
                  <Body values={data.launchNext} />
                </>
              )}
            </Table>
          </section>

          <section className="bg-white mt-32 mb-20  lg:py-[120px]">
            <Title name={TITLES.UpCOMMING_LAUNCHES_TABLE} />
            <Table >
              {data && (
                <>
                  <Head />
                  <Body launchesUpcoming={data.launchesUpcoming} />
                </>
              )}
            </Table>
          </section>
        </>
      )}
    </>
  );
};

export default Main;
