/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
    courtCases:[
        {
            "appearances": [
                {
                    "court-case-ref": "T20230101",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "9",
                    "warrant-date-month": "2",
                    "warrant-date-year": "2023",
                    "court-name": "Bristol Magistrates Court",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [ 
                        {
                            "offence-start-date-day": "1",
                            "offence-start-date-month": "1",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Burglary other than dwelling - theft",
                            "outcome": "Remand before conviction"
                        }
                    ]
                },
                {
                    "court-case-ref": "T20230101",
                    "overall-case-outcome": "Imprisonment",
                    "next-court-date-set": "No",
                    "warrant-date-day": "10",
                    "warrant-date-month": "3",
                    "warrant-date-year": "2023",
                    "court-name": "Bristol Magistrates Court",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "1",
                            "offence-start-date-month": "1",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": " Burglary other than dwelling - theft",
                            "outcome": "Sentenced"
                        }
                    ]
                }
            ]
        }
    ]
    // ,courtCase: {
    //     'court-case-ref': '123',
    //     'court-name': 'Birmingham Court',
    //     'warrant-date-day': '12',
    //     'warrant-date-month': '9',
    //     'warrant-date-year': '2023',
    //     'type-of-case': "Remand",
    //     'overall-case-outcome': "Remand before conviction",
    //     'next-court-date-set': "No",
    //      offences: []
    // } Example of what is stored in the session for submitting a court case

  // Insert values here

}