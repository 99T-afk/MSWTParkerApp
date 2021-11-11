/**
 * @fileoverview Renders multiple components that make up the media screen, wrapped in a scrollview.
 */
import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import MediaLargeBox from '../components/MediaLargeBox';
import MediaWideBox from '../components/MediaWideBox';

/**
 * MediaScreen function responsible for calling the components to be rendered.
 * @returns A scrollview containing multiple media components to be rendered.
 */
export default function MediaScreen() {
    return (
      <ScrollView style={styles.boundingBox} persistentScrollbar={true}>
        <MediaLargeBox id={1} bodyText={"We look at the top rated spots in the UK...."} titleText={"Our top rated spots in the UK!"} />
        <MediaWideBox id={2} bodyText={"They may look cuddly, but can they be trusted?"} titleText={"Jellyfish - Friend or foe?"} />
        <MediaWideBox id={3} bodyText={"Grab yourself a lost soul at a cut price!"} titleText={"Top tips for Davy Jones' lost and found"} />
        <MediaLargeBox id={4} bodyText={"Seagulls are not real, please wake up"} titleText={"It may already be too late..."} />
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  boundingBox: {
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 5
  },
  leadingBox: {
    height: 200,
    backgroundColor: '#ff33bb'
  },
  subBox: {
    height: 200,
    backgroundColor: '#ff33bb'
  },
})