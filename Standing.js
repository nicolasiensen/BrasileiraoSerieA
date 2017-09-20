import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

import { improveTeamName } from "./utils";

const Standing = props => (
  <View style={styles.standingView}>
    <View style={styles.row}>
      <Text style={styles.positionHeaderCell} />
      <Text style={styles.teamNameHeaderCell}>Classificação</Text>
      <Text style={styles.pointsHeaderCell}>P</Text>
      <Text style={styles.playedGamesHeaderCell}>J</Text>
      <Text style={styles.pointsPercentageHeaderCell}>%</Text>
    </View>
    <FlatList
      {...props}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => renderStandingRow(item)}
    />
  </View>
);

const renderStandingRow = team => (
  <View style={styles.row}>
    <Text style={styles.positionCell}>{team.position}</Text>
    <Text numberOfLines={1} style={styles.teamNameCell}>
      {improveTeamName(team.teamName)}
    </Text>
    <Text style={styles.pointsCell}>{team.points}</Text>
    <Text style={styles.playedGamesCell}>{team.playedGames}</Text>
    <Text style={styles.pointsPercentageCell}>
      {Math.ceil(team.points / (team.playedGames * 3) * 100)}
    </Text>
  </View>
);

const cellStyle = {
  padding: 10,
  width: 50,
  fontSize: 14,
  color: "#333333"
};

const styles = StyleSheet.create({
  standingView: { flex: 1 },
  row: {
    flexDirection: "row",
    borderBottomColor: "#eeeeee",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderStyle: "solid",
    borderBottomWidth: 1
  },
  teamNameHeaderCell: { ...cellStyle, flex: 1, color: "#999999" },
  positionHeaderCell: { ...cellStyle, color: "#999999" },
  pointsHeaderCell: { ...cellStyle, textAlign: "center", color: "#999999" },
  playedGamesHeaderCell: {
    ...cellStyle,
    textAlign: "center",
    color: "#999999"
  },
  pointsPercentageHeaderCell: {
    ...cellStyle,
    textAlign: "center",
    color: "#999999"
  },
  positionCell: { ...cellStyle, fontSize: 17 },
  teamNameCell: { ...cellStyle, flex: 1, fontSize: 17 },
  pointsCell: {
    ...cellStyle,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#f5f5f5"
  },
  playedGamesCell: { ...cellStyle, textAlign: "center" },
  pointsPercentageCell: {
    ...cellStyle,
    textAlign: "center",
    backgroundColor: "#f5f5f5"
  }
});

export default Standing;
