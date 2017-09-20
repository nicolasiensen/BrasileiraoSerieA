let getLeagueTableResponse = new Promise(() => {});

export function __setGetLeagueTableResponse(response) {
  getLeagueTableResponse = response;
}

export async function getLeagueTable(competitionID) {
  return await getLeagueTableResponse;
}
