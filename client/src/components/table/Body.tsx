/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import TD from './TD';

interface LaunchSite {
    site_name: string;
}

interface RocketInventory {
    mission_name: string;
    launch_date_local: string;
    launch_site: LaunchSite;
}

interface RocketInventoryData {
    values?: RocketInventory
    launchesUpcoming?: RocketInventory[];
    launchesPast?: RocketInventory[];
}

const Body = ({ values, launchesUpcoming, launchesPast }: RocketInventoryData) => {
    return (
        <tbody>
            {values && (
                <tr>
                    <TD>
                        {values.mission_name}
                    </TD>
                    <TD>
                        {values.launch_date_local}
                    </TD>
                    <TD>
                        {values.launch_site.site_name}
                    </TD>
                </tr>
            )}

            {launchesUpcoming && (
                <>
                    {launchesUpcoming.map((item, index) => {
                        return (
                            <tr key={index}>
                                <TD>{item.mission_name}</TD>
                                <TD>{item.launch_date_local}</TD>
                                <TD>{item.launch_site.site_name}</TD>
                            </tr>
                        )
                    })}
                </>
            )}

            {launchesPast && (
                <>
                    {launchesPast.map((item, index) => {
                        return (
                            <tr key={index}>
                                <TD>{item.mission_name}</TD>
                                <TD>{item.launch_date_local}</TD>
                                <TD>{item.launch_site.site_name}</TD>
                            </tr>
                        )
                    })}
                </>
            )}
        </tbody>
    )
}

export default Body

// how to use props in tailwind css

// z index to the header

// styles each table accordingly