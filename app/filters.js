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
    return arr.filter(courtCase => courtCase['scenario'] == '1' && courtCase['status'] == 'inactive')
})
 
addFilter('scenario2ActiveCase', function(arr) {
    return arr.filter(courtCase =>  courtCase['scenario'] == '2' && courtCase['status'] != 'inactive')
})


addFilter('scenario2InActiveCase', function(arr) {
    return arr.filter(courtCase =>  courtCase['scenario'] == '2' && courtCase['status'] == 'inactive')
})

addFilter('activeCase', function(arr) {
    return arr.filter(courtCase => courtCase['scenario'] == '1' && courtCase['status'] != 'inactive' )
})

addFilter('unsupportedInactiveCase', function(arr) {
    return arr.filter(courtCase => courtCase['scenario'] == 'unsupported' && courtCase['status'] == 'inactive' )
})

addFilter('unsupportedActiveCase', function(arr) {
    return arr.filter(courtCase => courtCase['scenario'] == 'unsupported' && courtCase['status'] != 'inactive' )
})

addFilter('activeSentence', function(arr) {
    return arr.filter(courtCase =>
        courtCase.scenario == "1" &&
        courtCase.status != "inactive" &&
        courtCase.appearances &&
        courtCase.appearances.some(appearance =>
            appearance.sentences &&
            appearance.sentences.some(sentence =>
                sentence['unsupported-sentence'] !== "true" &&
                sentence.status === "active"
            )
        )
    );
});


addFilter('activeUnsupportedSentence', function(arr) {
    return arr.filter(courtCase =>
        courtCase.scenario == "unsupported" &&
        courtCase.status != "inactive" &&
        courtCase.appearances &&
        courtCase.appearances.some(appearance =>
            appearance.sentences &&
            appearance.sentences.some(sentence =>
                sentence['unsupported-sentence'] === "true" &&
                sentence.status === "active"
            )
        )
    );
});

addFilter('activeSentence2', function(arr) {
    return arr.filter(courtCase =>
        courtCase.scenario == "2" &&
        courtCase.status != "inactive" &&
        courtCase.appearances &&
        courtCase.appearances.some(appearance =>
            appearance.sentences &&
            appearance.sentences.some(sentence =>
                sentence['unsupported-sentence'] !== "true" &&
                sentence.status === "active"
            )
        )
    );
});

// Inactive sentence (with scenario == 1)
addFilter('inactiveSentence', function(arr) {
    return arr.filter(courtCase =>
        courtCase.scenario == "1" &&
        courtCase.status != "inactive" &&
        courtCase.appearances &&
        courtCase.appearances.some(appearance =>
            appearance.sentences &&
            appearance.sentences.some(sentence =>
                sentence.status === "inactive"
            )
        )
    );
});

// Inactive unsupported sentence (with scenario == unsupported)
addFilter('inactiveUnsupportedSentence', function(arr) {
    return arr.filter(courtCase =>
        courtCase.scenario == "unsupported" &&
        courtCase.status != "inactive" &&
        courtCase.appearances &&
        courtCase.appearances.some(appearance =>
            appearance.sentences &&
            appearance.sentences.some(sentence =>
                sentence['unsupported-sentence'] == "true" &&
                sentence.status === "inactive"
            )
        )
    );
});

// Inactive sentence (with scenario == 2)
addFilter('inactiveSentence2', function(arr) {
    return arr.filter(courtCase =>
        courtCase.scenario == "2" &&
        courtCase.status != "inactive" &&
        courtCase.appearances &&
        courtCase.appearances.some(appearance =>
            appearance.sentences &&
            appearance.sentences.some(sentence =>
                sentence.status === "inactive"
            )
        )
    );
});
