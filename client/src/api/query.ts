import { gql } from "@apollo/client";

export const NextLaunch = gql`
  query {
    launchNext {
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
    }
  }
`;

export const UpcomingLaunchesTable = gql`
  query LaunchesUpcoming($limit: Int) {
    launchesUpcoming(limit: $limit) {
      launch_date_local
      launch_site {
        site_name
      }
      mission_name
    }
  }
`;

export const PastLaunchesPage = gql`
  query LaunchesPast($limit: Int) {
    launchesPast(limit: $limit) {
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
    }
  }
`;
