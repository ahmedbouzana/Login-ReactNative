/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./app/components/Home";
import Dashboard from "./app/components/Dashboard";

const RootStack = createStackNavigator({
  home: Home,
  dd: Dashboard
});

export default createAppContainer(RootStack);
