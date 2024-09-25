//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here


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