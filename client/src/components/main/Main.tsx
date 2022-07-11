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
import moment, {duration} from 'moment-timezone';
import { setInterval } from "timers/promises";
import Particles from 'react-tsparticles';
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
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const DEFAULT_STATE: State = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
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

  // const { loading, error, data } = useQuery<LaunchesUpcomingInventoryData, InventoryVars>(UpcomingLaunchesTable,{
  //   variables: {
  //     limit: 10,
  //   }
  // }
  // );



  // if (error) {
  //   console.log("error =>>", error.message)
  // }

  // let Arr: { data: RocketInventory; }[] = [];

  // CONVERTED TO LOCAL TIME DONE
  // const date = moment.utc('2020-12-06T16:17:00.000Z').format();
  // console.log(date, "- now in UTC");
  // const local = moment.utc(date).local().format();
  // console.log(local, "- UTC now to local");

  var jun = moment("2020-12-06T16:17:00.000Z");
  jun.tz('Africa/Johannesburg').format('ha z');  // 5am PDT
  console.log("- local past timezone", jun.hour());
  const now = moment();
  console.log("- local now timezone", now.hour());

  let remaining = jun.hour() - now.hour();
  console.log("- remaining", remaining);
  console.log('moment duration', moment.duration(remaining,'milliseconds').humanize({h:Infinity}));

  let x = moment.duration(remaining,'milliseconds').humanize({h:Infinity})

  let cut = x.split(' ');
  let hour = cut[0];

  let word = cut[1]


  // DISPLAYING REMAINING IN HOURS
  const calcTimer = () => {
    //const futureDate = moment(value);

    const today = moment();
    //console.log('today', today)

    const clockDuration = duration(jun.tz('Africa/Johannesburg').diff(today));
    //console.log('clockDuration', clockDuration)

    const days = Math.floor(clockDuration.asDays());
    const hours = clockDuration.hours();
    const minutes = clockDuration.minutes();
    const seconds = clockDuration.seconds();

    setState(prevState => ({ ...prevState, days: days }));
    setState(prevState => ({ ...prevState, hours: hours }));
    setState(prevState => ({ ...prevState, minutes: minutes }));
    setState(prevState => ({ ...prevState, seconds: seconds }));
  }


  useEffect(() => {
    //setTime()
    // window.setInterval(() => {
    //   calcTimer()
    // }, 1000)

    // return () => {
    //   window.clearInterval()
    // }
  }, [])



  // const now = Math.floor(Date.now() / 1000);
  // const time = 1607271420;

  // const remaining = now - time
  // console.log(moment.duration(remaining, 'milliseconds'))


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="bg-white mt-32 mb-20  lg:py-[120px]">
            <Title name={TITLES.NEXT_LAUNCH} />
            <Table borderDoubled>
              {data && (
                <>
                  <Head />
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
