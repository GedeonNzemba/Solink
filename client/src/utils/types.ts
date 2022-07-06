interface LaunchSite {
    site_name: string;
}

interface Inventory {
    launch_date_local: string;
    launch_site: [LaunchSite];
    mission_name: string;
}

export interface LaunchesUpcomingInventoryData {
    launchesUpcoming: Inventory[];
}

export interface LaunchesPastInventoryData {
    launchesPast: Inventory[];
}

export interface InventoryVars {
  limit: number;
}
