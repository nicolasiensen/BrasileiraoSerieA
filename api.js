const API_HOST = "https://api.football-data.org/v1";

export async function getLeagueTable(competitionID) {
  const response = await fetch(
    `${API_HOST}/competitions/${competitionID}/leagueTable`
  );
  const responseJson = await response.json();
  return responseJson;
}
