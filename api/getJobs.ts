import jobsData from './jobs.json'

export function getJobs(): Job[] {
    console.log('data', jobsData)

    return jobsData.jobs;
}