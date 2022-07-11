import { TABLE_HEADER_NAMES } from "./enum";

interface LaunchSite {
    site_name: string;
    __typename: string;
}

export interface Inventory {
    mission_name: string;
    launch_date_local: string;
    launch_site: [LaunchSite];
}

export interface DATA {
    __typename: string;
    mission_name: string;
    launch_date_local: string;
    launch_site: [LaunchSite];
}

export interface LaunchNextInventoryData  {
    launchNext: DATA[];
}

export interface LaunchesUpcomingInventoryData {
    launchesUpcoming: DATA[];
}

interface RocketInventory {
    mission_name: string;
    launch_date_local: string;
    launch_site: LaunchSite;
  }
export interface LaunchesPastInventoryData {
    launchesPast: RocketInventory[];
}

export interface InventoryVars {
  limit: number;
}

// TABLES
export interface TABLE_HEADER_NAME {
    name: string
}

export interface TABLE_BODY_VALUE {
    value: string
}

export const headerNames = [
    {
        name: TABLE_HEADER_NAMES.mission_name
    },
    {
        name: TABLE_HEADER_NAMES.launch_date_local,
    },
    {
        name: TABLE_HEADER_NAMES.site_name
    }
]

// Titles
export interface TITLE {
    name: string
}