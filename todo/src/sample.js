import React from 'react';

import sampleData from './sample.json'

const Sample = () => {

    const garphConfig = {
        legends: [
            { name: 'Delete', color: '#71706f' },
            { name: 'Write', color: '#542b2b' },
            { name: 'Read', color: '#bc5090' },
            { name: 'Batch', color: '#58508d' },
            { name: 'Associate', color: '#003f5c' }
        ],
        groupInfo: [
            { name: 'Normal Range (Last x active days) ', color: '#5153f2' },
            { name: 'Anomaly ', color: '#ff6050' },
        ],
        groups: [{
            outlineColor: '#5153f2',
            bars: [{
                stacks: [{ value: 0, color: '#ffff' }]
            }]
        }]

    }


    // console.log(todos.todo)

    // const listItems = todos.todo.map((item, index, arr) => {
    //     return (
    //         console.log(item)
    //     )
    // })

    const { recentHistorySummaryInfo = { lastNDailyBinCountPercentDistributions: [] } } = sampleData;
    const { lastNDailyBinCountPercentDistributions = [] } = recentHistorySummaryInfo.lastNDailyBinCountPercentDistributions;

    const listItemsa = sampleData.recentHistorySummaryInfo.lastNDailyBinCountPercentDistributions.map((item, index, arr) => {

        const temp = [];

        const obj = {}
        obj['value'] = Object.values(item.binNameToDailyBinCountPercent)
        obj['color'] = 'red'

        return (
            // console.log(item.binNameToDailyBinCountPercent)

            console.log(Object.values(item.binNameToDailyBinCountPercent))

            // console.log(obj)


        )
    })

    // console.log(sampleData.recentHistorySummaryInfo.lastNDailyBinCountPercentDistributions)


    return (
        <h1>hello</h1>
    )
}


export default Sample