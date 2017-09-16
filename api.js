import config from "./config.json";

const API_HOST = "https://api.football-data.org/v1";

export async function getLeagueTable(competitionID) {
  const response = await fetch(
    `${API_HOST}/competitions/${competitionID}/leagueTable`,
    {
      headers: new Headers({ "X-Auth-Token": config["API_KEY"] })
    }
  );

  const responseJson = await response.json();

  if (response.status === 200) {
    return responseJson;
  } else {
    throw responseJson.error;
  }
}
