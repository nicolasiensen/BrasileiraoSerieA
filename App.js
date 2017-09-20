import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Standing from "./Standing";
import * as api from "./api";

const READY = "ready";
const LOADING = "loading";
const ERRORED = "errored";
const BRAZILIAN_LEAGUE_ID = "444";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { standing: [], status: READY };
    this.loadStanding = this.loadStanding.bind(this);
  }

  componentWillMount() {
    this.loadStanding();
  }

  async loadStanding() {
    try {
      this.setState({ status: LOADING });
      const leagueTable = await api.getLeagueTable(BRAZILIAN_LEAGUE_ID);
      this.setState({ standing: leagueTable.standing, status: READY });
    } catch (err) {
      this.setState({ status: ERRORED });
    }
  }

  render() {
    const { status, standing } = this.state;

    return (
      <View style={styles.view}>
        {status === ERRORED ? (
          <Text>Error while loading data</Text>
        ) : (
          <Standing
            data={standing}
            onRefresh={this.loadStanding}
            refreshing={status === LOADING}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 24
  }
});
