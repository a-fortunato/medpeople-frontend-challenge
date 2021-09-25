import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getJobs } from '../../api/getJobs';
import JobCard from '../components/JobCard';

const JobListScreen: React.FC<{}> = () => {
  const navigation = useNavigation();
    const jobs: Job[] = getJobs();
    console.log('job list screen', jobs)
    return (
        <ScrollView contentContainerStyle={styles.container}>
          {jobs.map((job, idx) => {
              return (
                <JobCard
                  key={idx}
                  onPress={() => navigation.navigate('JobDescription', {job: jobs[idx]})}
                  job={job}
                />
              )
          })}
        </ScrollView>
      );
}

export default JobListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
