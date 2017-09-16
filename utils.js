IMPROVED_TEAM_NAMES = {
  "Atlético Goianiense": "Atlético GO",
  "Atlético Mineiro": "Atlético MG",
  "Avaí SC": "Avaí",
  "Coritiba FC": "Coritiba",
  "EC Flamengo": "Flamengo",
  "EC Vitória": "Vitória",
  "Fluminense FC": "Fluminense",
  "Santos FC": "Santos",
  "Sao Paulo": "São Paulo",
  "Sport Recife": "Sport",
  "Vasco da Gama": "Vasco",
  Grémio: "Grêmio"
};

export function improveTeamName(teamName) {
  return IMPROVED_TEAM_NAMES[teamName] || teamName;
}
