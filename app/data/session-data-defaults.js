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
                    "overall-conviction-date-day": "3",
                    "overall-conviction-date-month": "1",
                    "overall-conviction-date-year": "2024",
                    "next-court-date-set": "No",
                    "warrant-date-day": "3",
                    "warrant-date-month": "1",
                    "warrant-date-year": "2024",
                    "court-name": "Bristol Magistrates Court",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [ 
                        {
                            "offence-start-date-day": "1",
                            "offence-start-date-month": "11",
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
                    "overall-conviction-date-day": "3",
                    "overall-conviction-date-month": "1",
                    "overall-conviction-date-year": "2024",

                    "overall-sentence-length-years": "0",
                    "overall-sentence-length-months": "14",
                    "overall-sentence-length-weeks": "0",
                    "overall-sentence-length-days": "0",
                    "next-court-date-set": "No",
                    "warrant-date-day": "3",
                    "warrant-date-month": "1",
                    "warrant-date-year": "2024",
                    "court-name": "Bristol Magistrates Court",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "sentences": [
                        {
                        "count-number": "1",
                        "conviction-date-day": "3",
                        "conviction-date-month": "1",
                        "conviction-date-year": "2024",
                        "offence-start-date-day": "1",
                        "offence-start-date-month": "11",
                        "offence-start-date-year": "2023",
                        "offence-end-date-day": "",
                        "offence-end-date-month": "",
                        "offence-end-date-year": "",
                        "offence-code": [
                            "CJ88001"
                        ],
                        "offence-name": "Burglary other than dwelling - theft",
                        "outcome": "Imprisonment",
                        "sentence-type": "	ORA Sentencing Code Standard Determinate Sentence",
                        "sentence-length-years": "0",
                        "sentence-length-months": "10",
                        "sentence-length-weeks": "0",
                        "sentence-length-days": "0",
                        "consecutive-concurrent": "Forthwith"
                    },

                    {
                        "count-number": "2",
                        "conviction-date-day": "3",
                        "conviction-date-month": "1",
                        "conviction-date-year": "2024",
                        "offence-start-date-day": "1",
                        "offence-start-date-month": "11",
                        "offence-start-date-year": "2023",
                        "offence-end-date-day": "",
                        "offence-end-date-month": "",
                        "offence-end-date-year": "",
                        "offence-code": [
                            "CJ88001"
                        ],
                        "offence-name": "Burglary other than dwelling - theft",
                        "outcome": "Imprisonment",
                        "sentence-type": "	ORA Sentencing Code Standard Determinate Sentence",
                        "sentence-length-years": "0",
                        "sentence-length-months": "14",
                        "sentence-length-weeks": "0",
                        "sentence-length-days": "0",
                        "consecutive-concurrent": "Forthwith"
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