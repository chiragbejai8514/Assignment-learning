let loadData = (function () {
    function loadData(searchType) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let parsedData = getParsedData(this.response);
                let compass = new Compass(parsedData);
                console.log(compass.data)//grouping according to the key
                let searchCriteriaUsers = {
                    id: 'arn:aws:iam::377596131774:user/devops',
                    subType: 'LOCAL'
                };

                let searchCriteriaGroups = {
                    id: 'arn:aws:iam::377596131774:group/spartans',
                    domain: "377596131774"
                };
                let searchCriteriaRoles = {
                    id: 'arn:aws:iam::377596131774:role/ecsTaskExecutionRole',
                    subType: 'LOCAL'
                };
                let searchCriteriaResources = {
                    id: '956987887735\ec2:security-group\sg-05349afea811e8eb1',
                    typeS: "security-group"
                };

                let users = parsedData.data[searchType];
                users.forEach(user => {
                    ``
                    let userTemplate = getUserTemplate(user, searchType);

                    document.body.innerHTML += userTemplate;
                });

                //let user = compass.getDataBySearchCriteria('user', searchCriteriaUsers);
                let role = compass.getDataBySearchCriteria('roles', searchCriteriaRoles);
                //let groups = compass.getDataBySearchCriteria('groups', searchCriteriaGroups);
                // let resource = compass.getDataBySearchCriteria('resources', searchCriteriaResources);
                console.log(role)
                let userss = compass.getUserBySubTypeAndId('CROSS_ACCOUNT', 'arn:aws:ext:iam/813371855235/CloudKnox');
                console.log(userss)

            }
        };
        xhttp.open("GET", "data.json", true);
        xhttp.send();
    }

    function getParsedData(data) {
        return JSON.parse(data);
    }

    function getUserTemplate(data, searchType) {
        return `<div class="em-block">
       <div class="em-block__header">
         ${searchType}
       </div>
       <div class="em-block__content">
         <div class="em-block__image-holder"><img src="data:image/jpeg;base64,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"></div>
         <div class="em-block__users-info">
           <div class="name">Name: ${data.name}</div>
           <div>Id: ${data.id}</div>
           <div>Domain: ${data.domain}</div>
         </div>
       </div>
     </div>`;
    }
    return loadData;
})()





