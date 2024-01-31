//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post(`/task-based-routing`, function (req, res) {
	const navRoute = req.session.data['navOption'];
	if (navRoute === 'single-entry') {
		res.redirect(`overview`);
	}
	else if (navRoute === 'adjustments') {
		res.redirect(`adjustments`);
	}
	else if (navRoute === 'crd') {
		res.redirect(`calculate-release-dates/check-sentence-and-offence-information`);
	}
	else if (navRoute === 'court-cases') {
		res.redirect(`court-cases`);
	}
	else if (navRoute === 'crd-lookup') {
		res.redirect(`release-dates`);
	}
	else {
		res.redirect(`overview`);
	}
  });

 
router.post(`/associate-doc-choice`, function (req, res) {
	const navRoute = req.session.data['associateDoc'];
	if (navRoute === 'yes') {
		res.redirect(`add-documents/choose-court-case`);
	}
	else if (navRoute === 'no') {
		res.redirect(`add-documents/add-case-reference`);
	} 
	else {
		res.redirect(`add-documents/choose-court-case`);
	}
  });


router.post(`new-calculation`, function (req, res) {
	const navRoute = req.session.data['newCalc'];
		res.redirect(`test`);
  });


  router.get('/:prototypeVersion/view-court-case-detail', function(req, res) {
    const prototypeVersion = req.params.prototypeVersion
    const courtCaseIndex = Number(req.query.courtCaseIndex) + 1
    console.log('Court case index: ' + courtCaseIndex)
    res.redirect(`/${prototypeVersion}/court-cases/court-case-detail`)
})
