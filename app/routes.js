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

 
router.post(`/associate-doc-choice`, function (req, res) {
	const navRoute = req.session.data['associateDoc'];
	if (navRoute === 'yes') {
		res.redirect(`v5/add-documents/choose-court-case`);
	}
	else if (navRoute === 'no') {
		res.redirect(`v5/add-documents/add-case-reference`);
	} 
	else {
		res.redirect(`v5/add-documents/choose-court-case`);
	}
  });


  router.get('/:prototypeVersion/new-calculation', function(req, res) {
    const prototypeVersion = req.params.prototypeVersion 
    res.redirect(`/${prototypeVersion}/calculate-release-dates/calculation-complete?newCalculation=true`)
})


 
router.post(`/:prototypeVersion/approved-dates-question`, function (req, res) {
	const prototypeVersion = req.params.prototypeVersion
	var navRoute = req.session.data['approvedDatesQuestion'];
	if (navRoute === 'yes') {
		res.redirect(`/${prototypeVersion}/calculate-release-dates/select-which-approved-dates`);
	}
	else if (navRoute === 'no') {
		res.redirect(`/${prototypeVersion}/calculate-release-dates/calculation-complete`);
	} 
	else {
		res.redirect(`/${prototypeVersion}/calculate-release-dates/calculation-complete`);
	}
  });

 
  router.post(`/:prototypeVersion/which-dates-to-add`, function (req, res) {
	const prototypeVersion = req.params.prototypeVersion
	var dateSelect = req.session.data['date-delect'];
	if (dateSelect == 'APD') {
		res.redirect(`/${prototypeVersion}/calculate-release-dates/enter-APD`);
	}
	else if (dateSelect == 'HDCAD') {
		res.redirect(`/${prototypeVersion}/calculate-release-dates/enter-HDCAD.html`);
	} 
	else if (dateSelect == 'ROTL') {
		res.redirect(`/${prototypeVersion}/calculate-release-dates/enter-ROTL.html`);
	} 
	else {
		res.redirect(`/${prototypeVersion}/calculate-release-dates/enter-APD`);
	}
  });
 
  // Define the routes using :version as a param
router.get('/:version/recalls/revocation-date', (req, res) => {
	const version = req.params.version;
	res.render(`${version}/recalls/revocation-date`, { data: req.session.data });
  });
  
  router.post('/:version/recalls/revocation-date', (req, res) => {
	const version = req.params.version;
	const { 'revocation-date-day': day, 'revocation-date-month': month, 'revocation-date-year': year } = req.body;
	req.session.data['revocation-date-day'] = day;
	req.session.data['revocation-date-month'] = month;
	req.session.data['revocation-date-year'] = year;
	res.redirect(`/${version}/recalls/return-to-custody-date`);
  });
  
  router.get('/:version/recalls/return-to-custody-date', (req, res) => {
	const version = req.params.version;
	res.render(`${version}/recalls/return-to-custody-date`, { data: req.session.data });
  });
  
  router.post('/:version/recalls/return-to-custody-date', (req, res) => {
	const version = req.params.version;
	const { 'arrest-date-day': day, 'arrest-date-month': month, 'arrest-date-year': year } = req.body;
	req.session.data['arrest-date-day'] = day;
	req.session.data['arrest-date-month'] = month;
	req.session.data['arrest-date-year'] = year;
	res.redirect(`/${version}/recalls/check-sentence-and-offence-information`);
  });
  
  router.get('/:version/recalls/check-answers', (req, res) => {
	const version = req.params.version;
	const msInDay = 24 * 60 * 60 * 1000;
  
	const revocation = new Date(
	  `${req.session.data['revocation-date-year']}-${req.session.data['revocation-date-month']}-${req.session.data['revocation-date-day']}`
	);
  
	const arrest = new Date(
	  `${req.session.data['arrest-date-year']}-${req.session.data['arrest-date-month']}-${req.session.data['arrest-date-day']}`
	);
  
	let daysBetween = null;
  
	if (!isNaN(revocation) && !isNaN(arrest)) {
	  let rawDiff = Math.round((arrest - revocation) / msInDay);
	  daysBetween = rawDiff > 1 ? rawDiff - 1 : 0;
	}
  
	res.render(`${version}/recalls/check-answers`, {
	  data: req.session.data,
	  daysBetween,
	});
  });
  

  router.get('/:version/adjustments', (req, res) => {
	const version = req.params.version;
	const msInDay = 24 * 60 * 60 * 1000;
  
	const revocation = new Date(
	  `${req.session.data['revocation-date-year']}-${req.session.data['revocation-date-month']}-${req.session.data['revocation-date-day']}`
	);
  
	const arrest = new Date(
	  `${req.session.data['arrest-date-year']}-${req.session.data['arrest-date-month']}-${req.session.data['arrest-date-day']}`
	);
  
	let daysBetween = null;
  
	if (!isNaN(revocation) && !isNaN(arrest)) {
	  let rawDiff = Math.round((arrest - revocation) / msInDay);
	  daysBetween = rawDiff > 1 ? rawDiff - 1 : 0;
	}
  
	res.render(`${version}/adjustments`, {
	  data: req.session.data,
	  daysBetween,
	});
  });
  
  router.get('/:version/calculate-release-dates/check-sentence-and-offence-information', (req, res) => {
	const version = req.params.version;
	const msInDay = 24 * 60 * 60 * 1000;
  
	const revocation = new Date(
	  `${req.session.data['revocation-date-year']}-${req.session.data['revocation-date-month']}-${req.session.data['revocation-date-day']}`
	);
  
	const arrest = new Date(
	  `${req.session.data['arrest-date-year']}-${req.session.data['arrest-date-month']}-${req.session.data['arrest-date-day']}`
	);
  
	let daysBetween = null;
  
	if (!isNaN(revocation) && !isNaN(arrest)) {
	  let rawDiff = Math.round((arrest - revocation) / msInDay);
	  daysBetween = rawDiff > 1 ? rawDiff - 1 : 0;
	}
  
	res.render(`${version}/calculate-release-dates/check-sentence-and-offence-information`, {
	  data: req.session.data,
	  daysBetween,
	});
  });
  
  router.get('/:version/overview', (req, res) => {
	const version = req.params.version;
	const msInDay = 24 * 60 * 60 * 1000;
  
	const revocation = new Date(
	  `${req.session.data['revocation-date-year']}-${req.session.data['revocation-date-month']}-${req.session.data['revocation-date-day']}`
	);
  
	const arrest = new Date(
	  `${req.session.data['arrest-date-year']}-${req.session.data['arrest-date-month']}-${req.session.data['arrest-date-day']}`
	);
  
	let daysBetween = null;
  
	if (!isNaN(revocation) && !isNaN(arrest)) {
	  let rawDiff = Math.round((arrest - revocation) / msInDay);
	  daysBetween = rawDiff > 1 ? rawDiff - 1 : 0;
	}
  
	res.render(`${version}/overview`, {
	  data: req.session.data,
	  daysBetween,
	});
  });
  
  router.get('/:version/recalls', (req, res) => {
	const version = req.params.version;
	const msInDay = 24 * 60 * 60 * 1000;
  
	const revocation = new Date(
	  `${req.session.data['revocation-date-year']}-${req.session.data['revocation-date-month']}-${req.session.data['revocation-date-day']}`
	);
  
	const arrest = new Date(
	  `${req.session.data['arrest-date-year']}-${req.session.data['arrest-date-month']}-${req.session.data['arrest-date-day']}`
	);
  
	let daysBetween = null;
  
	if (!isNaN(revocation) && !isNaN(arrest)) {
	  let rawDiff = Math.round((arrest - revocation) / msInDay);
	  daysBetween = rawDiff > 1 ? rawDiff - 1 : 0;
	}
  
	res.render(`${version}/recalls`, {
	  data: req.session.data,
	  daysBetween,
	});
  });
  