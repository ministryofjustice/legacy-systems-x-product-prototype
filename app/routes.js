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
  

  router.get('/:version/recalls/edit/are-you-sure-delete', (req, res) => {
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
  
	res.render(`${version}/recalls/edit/are-you-sure-delete`, {
	  data: req.session.data,
	  daysBetween,
	});
  });




  router.get('/v19_1/set-sentence/:code', function (req, res) {
  const code = req.params.code;
  req.session.data['sentenceUpdated'] = code;

  const courtCases = req.session.data.courtCases || [];
  const updatedOffences = req.session.data.updatedOffences || {};

  let foundAppearance = null;

  for (const courtCase of courtCases) {
    if (courtCase.status !== 'inactive' && courtCase.scenario === 'unsupported') {
      for (const appearance of courtCase.appearances) {
        let foundInAppearance = false;

        if (appearance.offences) {
          foundInAppearance = appearance.offences.some(offence =>
            offence['offence-code'].includes(code)
          );
        }

        if (!foundInAppearance && appearance.sentences) {
          foundInAppearance = appearance.sentences.some(sentence =>
            sentence['offence-code'].includes(code)
          );
        }

        if (foundInAppearance) {
          foundAppearance = appearance;
          break;
        }
      }
    }
    if (foundAppearance) break;
  }

  if (foundAppearance) {
    let offenceCodes = [];

    if (foundAppearance.offences) {
      offenceCodes = foundAppearance.offences.flatMap(o => o['offence-code']);
    } else if (foundAppearance.sentences) {
      offenceCodes = foundAppearance.sentences.flatMap(s => s['offence-code']);
    }

    const totalOffences = offenceCodes.length;

    const updatedCount = offenceCodes.reduce((count, offenceCode) => {
      if (updatedOffences[offenceCode] === 'updated') {
        return count + 1;
      }
      return count;
    }, 0);

    // ✅ THIS SHOULD TRIGGER WHEN MULTIPLE OFFENCES EXIST AND NONE ARE UPDATED
    if (totalOffences > 1 && updatedCount === 0) {
      return res.redirect('/v19_1/recalls/apply-to-all');
    }
  }

  // fallback: go to single sentence type page
  return res.redirect('/v19_1/recalls/sentence-type');
});

  // Show the "apply to all" choice page
  router.get('/v19_1/recalls/apply-to-all', function (req, res) {
	res.render('v19_1/recalls/apply-to-all');
  });
  
  router.post('/v19_1/recalls/apply-to-all', function(req, res) {
	const choice = req.body.choice; // 'yes' or 'no'
	const offenceCode = req.session.data['sentenceUpdated'];
	const courtCases = req.session.data.courtCases || [];

	console.log('[DEBUG] Received choice:', choice);
	console.log('[DEBUG] sentenceUpdated:', offenceCode);

	if (choice === 'yes') {
		let offenceCodes = [];

		for (const courtCase of courtCases) {
			if (courtCase.status !== 'inactive' && courtCase.scenario === 'unsupported') {
				for (const appearance of courtCase.appearances) {

					console.log('[DEBUG] Checking appearance...');
					if (appearance.sentences) {
						console.log('[DEBUG] Sentences in appearance:');
						appearance.sentences.forEach(sentence => {
							console.log('  - offence-code:', sentence['offence-code']);
						});
					
						const found = appearance.sentences.some(sentence => {
							const codes = Array.isArray(sentence['offence-code']) ? sentence['offence-code'] : [sentence['offence-code']];
							const match = codes.includes(offenceCode);
							console.log(`[DEBUG] Comparing codes ${JSON.stringify(codes)} with "${offenceCode}" =>`, match);
							return match;
						});
					
						if (found) {
							offenceCodes = appearance.sentences.flatMap(s => s['offence-code']);
							console.log('[DEBUG] MATCH FOUND. offenceCodes to apply to:', offenceCodes);
							break;
						}
					}
					
				}
			}
			if (offenceCodes.length) break;
		}

		if (!offenceCodes.length) {
			console.warn('[WARNING] No offences found to apply to all!');
		}

		req.session.data.currentAppearanceOffenceCodes = offenceCodes;
		req.session.data.applyToAll = true;

		return res.redirect('/v19_1/recalls/sentence-type-all');
	} else {
		req.session.data.applyToAll = false;
		return res.redirect('/v19_1/recalls/sentence-type');
	}
});

  
  
  // Render the sentence type selection for single offence
  router.get('/v19_1/recalls/sentence-type', function (req, res) {
	res.render('v19_1/recalls/sentence-type', {
	  offenceCode: req.session.data['sentenceUpdated']
	});
  });
  
  // Render the sentence type selection for all offences
  router.get('/v19_1/recalls/sentence-type-all', function (req, res) {
	res.render('v19_1/recalls/sentence-type-all');
  });
  
  // Handle submission of sentence type updates
  router.post('/v19_1/recalls/update-sentence-types', function (req, res) {
	const selectedType = req.body['sentence-type'];
	const updatedOffences = req.session.data.updatedOffences || {};
	const sentenceTypes = req.session.data.sentenceTypes || {};
  
	const allCodes = req.session.data.currentAppearanceOffenceCodes || [];
	const applyToAll = req.session.data.applyToAll || false;
	const singleCode = req.session.data['sentenceUpdated'];
  
	console.log('[DEBUG] applyToAll:', applyToAll);
	console.log('[DEBUG] allCodes:', allCodes);
	console.log('[DEBUG] singleCode:', singleCode);
  
	if (applyToAll) {
	  allCodes.forEach(code => {
		updatedOffences[code] = 'updated';
		sentenceTypes[code] = selectedType;
	  });
	  console.log('[DEBUG] Applied sentence type to ALL:', allCodes);
	} else {
	  if (singleCode) {
		updatedOffences[singleCode] = 'updated';
		sentenceTypes[singleCode] = selectedType;
		console.log('[DEBUG] Applied sentence type to SINGLE:', singleCode);
	  }
	}
  
	req.session.data.updatedOffences = updatedOffences;
	req.session.data.sentenceTypes = sentenceTypes;
  
	delete req.session.data.applyToAll;
	delete req.session.data.currentAppearanceOffenceCodes;
	delete req.session.data['sentenceUpdated'];
  
	res.redirect('/v19_1/recalls/update-sentence-types');
  });
  
  
  // Render update sentence types overview page
router.get('/v19_1/recalls/update-sentence-types', function(req, res) {
	const updatedOffences = req.session.data.updatedOffences || {};
	const sentenceTypes = req.session.data.sentenceTypes || {};
	const totalOffences = Object.keys(sentenceTypes).length;
	const updatedCount = Object.keys(updatedOffences).length;

	const allUpdated = totalOffences > 0 && totalOffences === updatedCount;

	res.render('v19_1/recalls/update-sentence-types', {
		updatedOffences,
		sentenceTypes,
		allUpdated,
		totalOffences,
		updatedCount,
		error: req.session.data.error || null
	});
	delete req.session.data.error; // clear after use
});

router.post('/v19_1/recalls/update-sentence-types-finish', function (req, res) {
	const choice = req.body['finish-updating'];
	const sentenceTypes = req.session.data.sentenceTypes || {};
	const updatedOffences = req.session.data.updatedOffences || {};
	const courtCases = req.session.data.courtCases || [];
  
	let totalOffences = 0;
  
	for (const courtCase of courtCases) {
	  if (courtCase.status !== 'inactive' && courtCase.scenario === 'unsupported') {
		for (const appearance of courtCase.appearances) {
		  if (appearance.sentences) {
			totalOffences += appearance.sentences.length;
		  }
		}
	  }
	}
  
	const updatedCount = Object.keys(updatedOffences).length;
  
	console.log('[DEBUG] totalOffences:', totalOffences);
	console.log('[DEBUG] updatedCount:', updatedCount);
	console.log('[DEBUG] finish-updating choice:', choice);
  
	// Nothing selected – show error
	if (!choice) {
	  return res.render('v19_1/recalls/update-sentence-types', {
		error: true,
		errorMessage: 'Select yes if you have finished updating sentence types',
		updatedOffences,
		sentenceTypes
	  });
	}
  
	// Selected "no" – refresh page (no error)
	if (choice === 'no') {
	  return res.redirect('/v19_1/recalls/update-sentence-types');
	}
  
	// Selected "yes" but not all offences updated – show error
	if (choice === 'yes' && updatedCount < totalOffences) {
	  return res.render('v19_1/recalls/update-sentence-types', {
		error: true,
		errorMessage: 'You must update sentence types for all offences before continuing',
		updatedOffences,
		sentenceTypes
	  });
	}
  
	// All offences updated – go to next step
	return res.redirect('/v19_1/recalls/unsupported-check-sentence-and-offence-information');
  });
  
  
  
  