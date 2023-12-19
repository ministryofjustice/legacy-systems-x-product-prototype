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
		res.redirect(`v5/overview`);
	}
	else if (navRoute === 'adjustments') {
		res.redirect(`v5/adjustments`);
	}
	else if (navRoute === 'crd') {
		res.redirect(`v5/calculate-release-dates/check-sentence-and-offence-information`);
	}
	else if (navRoute === 'court-cases') {
		res.redirect(`v5/court-cases`);
	}
	else if (navRoute === 'crd-lookup') {
		res.redirect(`v5/release-dates`);
	}
	else {
		res.redirect(`v5/overview`);
	}
  });
