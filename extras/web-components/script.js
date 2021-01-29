
const species = [{ name: 'animal', id: 'animal' }, { name: 'bird', id: 'bird' }, { name: 'reptile', id: 'reptile' }];
const subCategory = [{ name: 'tiger', type: 'animal' }, { name: 'crow', type: 'bird' }, { name: 'snake', type: 'reptile' }];

const speciesSelector = document.getElementById('species-selector');
const subSpecies = document.getElementById('sub-species');

speciesSelector.options = species;
speciesSelector.addEventListener('optionselected', function (e) {
    subSpecies.options = subCategory.filter(category => {
        return category.type === e.detail.value;
    });
}, false);