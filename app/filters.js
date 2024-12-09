const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('unique', function(arr, field) {
    return [...new Set(arr.map(obj => obj[field]))]
})

addFilter('hasSentence', function(arr) {
    return arr.filter(sentence => sentence['count-number'] !== undefined)
})

addFilter('needsSentence', function(arr) {
    return arr.filter(sentence => sentence['count-number'] === undefined) 
})

addFilter('countNonDraft', function(arr) {
    return arr.filter(appearance => appearance['status'] != 'draft').length 
})

addFilter('countDraft', function(arr) {
    return arr.filter(appearance => appearance['status'] == 'draft').length 
})

addFilter('inactiveCase', function(arr) {
    return arr.filter(courtCase => courtCase['status'] == 'inactive')
})

addFilter('activeCase', function(arr) {
    return arr.filter(courtCase => courtCase['status'] != 'inactive')
})