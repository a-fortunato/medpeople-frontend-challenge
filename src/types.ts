import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  JobList: undefined;
  JobDescription: {job: Job};
};

export type JobDescriptionProps = NativeStackScreenProps<RootStackParamList, 'JobDescription'>;
