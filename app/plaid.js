import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const BASE_URL = "https://tnf03kuhhe.execute-api.us-east-1.amazonaws.com/plaid-link-token?name=me&user_id=2"
class PlaidLinkScreen extends Component {
  state = {
    loading: true,
    link_token : null,
  };
   
   fetchLinkToken = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (response.ok) {
        this.setState({ link_token : data.link_token});
      } else {
        setLinkToken(null);
      }
    } catch (error) {
      console.error('Error fetching link token:', error);
      setError('Error fetching link token. Please try again later.');
      setLinkToken(null);
    }
  };

  render() {
    if(!this.state.link_token) {
        this.fetchLinkToken()
    }
    return (
      <View style={styles.container}>
        {this.state.loading && <ActivityIndicator size="large" />}
        <WebView
          source={{
            uri: `https://cdn.plaid.com/link/v2/stable/link.html?isWebView=true&token=${this.state.link_token}`,
          }}
          onLoad={() => this.setState({ loading: false })}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PlaidLinkScreen;