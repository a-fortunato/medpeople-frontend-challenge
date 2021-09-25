import React from 'react';
import { Text, View } from 'react-native';
import { JobDescriptionProps } from '../types';

interface Props extends JobDescriptionProps {
}

const JobDescriptionScreen: React.FC<Props> = ({route}) => {
    const { job } = route.params
    return <View><Text>{job.employer_name}</Text></View>;
}

export default JobDescriptionScreen;
