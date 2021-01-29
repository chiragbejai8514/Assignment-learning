class Compass {
    constructor(parsedData) {
        this.data = this.getProcessedData(parsedData);
        this.dataSetMap = {
            'users': 'groupedUsers',
            'groups': 'groupedGroups',
            'roles': 'groupedRoles',
            'resources': 'groupedResources'

        };
    }

    getProcessedData(parsedData) {
        let data = {
            groupedUsers: {},
            groupedGroups: {},
            groupedRoles: {},
            groupedResources: {}
        };
        let users = parsedData.data.users;
        let groups = parsedData.data.groups;
        let resources = parsedData.data.resources;
        let roles = parsedData.data.roles;
        data.groupedUsers = this.getGrouped(users, 'subType');
        data.groupedGroups = this.getGrouped(groups, 'domain');
        data.groupedResources = this.getGrouped(resources, 'type');
        data.groupedRoles = this.getGrouped(roles, 'subType');
        return data;
    }

    getGrouped(users, groupingKey) {
        let grouped = {};
        let userLookUp = {};
        users.forEach(user => {
            if (!grouped[user[groupingKey]]) {
                grouped[user[groupingKey]] = [];
                userLookUp[user[groupingKey]] = {};
            }

            if (!userLookUp[user[groupingKey]][user.id]) {
                grouped[user[groupingKey]].push(user);
                userLookUp[user[groupingKey]][user.id] = ' ';
            }
        });
        //console.log(grouped)
        return grouped;
    }


    getUserBySubTypeAndId(subType, id) {
        return this.data.groupedUsers[subType].find(user => user.id === id);
    }

    getDataBySearchCriteria(dataSet, searchCriteria) {
        let keys = Object.keys(searchCriteria);
        let state = 1;

        while (state == 1) {
            try {
                if (!this.dataSetMap[dataSet]) {
                    throw "wrong data " + dataSet;
                }

            }
            catch (err) {
                alert(err);
                state = 0;
                break;
            }
            let mappedDataSet = this.data[this.dataSetMap[dataSet]];
            let tempArray = [];

            Object.keys(mappedDataSet).forEach(key => {
                tempArray = tempArray.concat(mappedDataSet[key]);
            })
            let index = 0;
            while (index < keys.length) {
                // let errorsFound = false;
                try {
                    if (!tempArray[0][keys[index]]) {
                        throw "[compass]:No " + keys[index] + " is present in " + dataSet;
                    }
                    else {
                        index++;
                    }
                }
                catch (err) {
                    console.error(err);
                    state = 0;
                    break;
                }
            }
            if (state == 0) {
                break;
            }
            let matchedDataItem = tempArray.find(data => {
                let found = false;

                keys.forEach(key => {
                    if (data[key] === searchCriteria[key]) {
                        found = true;
                    } else {
                        found = false
                    }
                });

                return found;
            });
            return matchedDataItem;
        }
    }









}