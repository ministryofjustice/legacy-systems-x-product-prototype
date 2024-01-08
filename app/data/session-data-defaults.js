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
                    "court-case-ref": "T20231234",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "Yes",
                    "next-hearing-type": "Court appearance",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Aldershot and Farnham County Court",
                    "next-court-date-day": "5",
                    "next-court-date-month": "10",
                    "next-court-date-year": "2023",
                    "next-court-time": "13:00",
                    "next-court-name": "Aldershot and Farnham County Court",
                    "offences": [
                        {
                            "offence-start-date-day": "24",
                            "offence-start-date-month": "8",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "TH68071"
                            ],
                            "offence-name": "Blackmail",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "24",
                            "offence-start-date-month": "8",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "TH68071"
                            ],
                            "offence-name": "Blackmail",
                            "outcome": "Remand before conviction"
                        }
                    ]
                }
            ]
        },
        {
            "appearances": [
                {
                    "court-case-ref": "D20239878",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Uxbridge MC",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": "Murder - victim one year of age or older",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Affray",
                            "outcome": "Remand before conviction"
                        }
                    ]
                },
                {
                    "court-case-ref": "D20239877",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Uxbridge MC",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": "Murder - victim one year of age or older",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Affray",
                            "outcome": "Remand before conviction"
                        }
                    ]
                },
                {
                    "court-case-ref": "D20239871",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Uxbridge MC",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": "Murder - victim one year of age or older",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Affray",
                            "outcome": "Remand before conviction"
                        }
                    ]
                },
                {
                    "court-case-ref": "D20239871",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Uxbridge MC",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": "Murder - victim one year of age or older",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Affray",
                            "outcome": "Remand before conviction"
                        }
                    ]
                },
                {
                    "court-case-ref": "D20239871",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Uxbridge MC",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": "Murder - victim one year of age or older",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Affray",
                            "outcome": "Remand before conviction"
                        }
                    ]
                },
                {
                    "court-case-ref": "D20239871",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Uxbridge MC",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": "Murder - victim one year of age or older",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Affray",
                            "outcome": "Remand before conviction"
                        }
                    ]
                },
                {
                    "court-case-ref": "D20239871",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Uxbridge MC",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": "Murder - victim one year of age or older",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Affray",
                            "outcome": "Remand before conviction"
                        }
                    ]
                },
                {
                    "court-case-ref": "D20239871",
                    "overall-case-outcome": "Remand before conviction",
                    "next-court-date-set": "No",
                    "warrant-date-day": "12",
                    "warrant-date-month": "9",
                    "warrant-date-year": "2023",
                    "court-name": "Uxbridge MC",
                    "next-hearing-type": "",
                    "next-court-date-day": "",
                    "next-court-date-month": "",
                    "next-court-date-year": "",
                    "next-court-time": "",
                    "offences": [
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "COML025"
                            ],
                            "offence-name": "Murder - victim one year of age or older",
                            "outcome": "Remand before conviction"
                        },
                        {
                            "offence-start-date-day": "10",
                            "offence-start-date-month": "9",
                            "offence-start-date-year": "2023",
                            "offence-end-date-day": "",
                            "offence-end-date-month": "",
                            "offence-end-date-year": "",
                            "offence-code": [
                                "PU86003"
                            ],
                            "offence-name": "Affray",
                            "outcome": "Remand before conviction"
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