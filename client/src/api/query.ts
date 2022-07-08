import { gql } from "@apollo/client";

export const NextLaunchsUpcoming = gql`
query GetLaunchNext($limit: Int) {
  launchNext {
    mission_name
    launch_date_local
    launch_site {
      site_name
    }
  }

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
