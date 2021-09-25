import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

interface Props {
    job: Job
}

const JobDescriptionHeader: React.FC<Props> = ({job}) => {
  console.log('header props', job)
  return (
    <ImageBackground
      style={{ width: '100%', height: 150 }}
      source={{uri: job.background_image}}
    />
  )
}

export default JobDescriptionHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'orange'

    },
});
