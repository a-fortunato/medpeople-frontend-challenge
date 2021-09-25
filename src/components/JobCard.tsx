import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    onPress(): void
    job: Job
}

const JobCard: React.FC<Props> = ({onPress, job}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <ImageBackground style={styles.cardHeader} source={{ uri: job.background_image }}>
            <Text>{job.department}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default JobCard

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'purple',
        margin: 15,
        borderRadius: 20,
        height: 200,
        width: '80%',
        overflow: 'hidden',
    },
    cardHeader: {
        width: '100%',
        height: 50,
    },
})
