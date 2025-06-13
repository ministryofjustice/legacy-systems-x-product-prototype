console.log("here")
//set up data

let adjustments = localStorage.getItem('adjustments');
adjustments = adjustments ? JSON.parse(adjustments) : [];

let tempUAL = localStorage.getItem('tempUAL');
tempUAL = tempUAL ? JSON.parse(tempUAL) : { };

let tempRADA = localStorage.getItem('tempRADA');
tempRADA = tempRADA ? JSON.parse(tempRADA) : { };

let dates = localStorage.getItem('dates');
dates = dates ? JSON.parse(dates) : [];

let TBcase = localStorage.getItem('TBcase');
TBcase = TBcase ? JSON.parse(TBcase) : [];
let selectedOffences = [];

let selectedRemandPeriodID = localStorage.getItem('SelectedRemandPeriod');
selectedRemandPeriodID = selectedRemandPeriodID ? JSON.parse(selectedRemandPeriodID) :0;

let selectedRecord = localStorage.getItem('selectedRecord');
selectedRecord = selectedRecord ? JSON.parse(selectedRecord) :[];

let activeJourney = localStorage.getItem('activeJourney');
activeJourney = activeJourney ? JSON.parse(activeJourney) :0;

let caseNo = localStorage.getItem('caseNo');
caseNo = caseNo ? JSON.parse(caseNo) :1;

let datesUpdated = localStorage.getItem('datesUpdated');
datesUpdated = datesUpdated ? JSON.parse(datesUpdated) :0;

let unusedRemand = localStorage.getItem('unusedRemand');
unusedRemand = unusedRemand ? JSON.parse(unusedRemand) :0;

let unusedTaggedBail = localStorage.getItem('unusedTaggedBail');
unusedTaggedBail = unusedTaggedBail ? JSON.parse(unusedTaggedBail) :0;

let taggedBailEdited = false;
let totalDays = 0;
for(let x of adjustments){
  totalDays += x.days;
}
//add-remand-dates-button

function radioRoute (radios) {
  for (let x of radios) {
    if (x.checked) {
      let route = x.getAttribute("data-route")
      location.href = `${route}.html`;
    }
  }
}

function createID(adjustments){
  let ids = [1]
  for(let x of adjustments) {
    ids.push(parseInt(x.id))

  }
  let max = Math.max(...ids)
  return max+1
}


const addDatesButton = document.getElementById("add-remand-dates-button")
const addOffencesButton = document.getElementById("add-offences-button")
const addTaggedBailDaysButton = document.getElementById("add-tagged-bail-days-button")
const saveTaggedBailButton = document.getElementById("saveTaggedBailButton")
const addCaseButton = document.getElementById("add-case-button")
const reviewButton = document.getElementById('review-remand-button')
const displayRemandContainer = document.getElementById('periodsOfRemand')

//add remand review page
if(reviewButton){
  let remandCount = document.getElementById('totalDays')
   let p=getTotalRemandDays("Remand", remandCount)

  //const result = adjustments.filter(({ type }) => type === "Remand");
  const result = filterAdjustmentsByType( "Remand");
  for(let x of result) {
    //displayRemandPeriod(x,displayRemandContainer);
    displayRemandPeriodAsCard(x,displayRemandContainer);
  }

  reviewButton.addEventListener('click', function(e){
    e.preventDefault()
    let radios = document.getElementsByClassName('govuk-radios__input');
    radioRoute(radios);
  })
}



function getSingleAdjustment(){

}

function displayRemandPeriod(x, target){
  let html = `    <dl class="govuk-summary-list govuk-!-margin-bottom-4">
   
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                               Remand period
                            </dt>
                            <dd class="govuk-summary-list__value">
                               ${x.start} to ${x.end}
                            </dd>
                            <dd class="govuk-summary-list__actions">
                                <a class="govuk-link" href="#">
                                    Edit<span class="govuk-visually-hidden"> Edit</span>
                                </a>
                            </dd>
                        </div>
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                               Offences
                            </dt>
                            <dd class="govuk-summary-list__value">
                                <ul class="govuk-list">
                                    ${listOffences(x.offences)}
                                </ul>
                            </dd>
                            <dd class="govuk-summary-list__actions">
                                <a class="govuk-link" href="#">
                                    Edit<span class="govuk-visually-hidden"> Edit</span>
                                </a>
                            </dd>
                        </div>
                        <div class="govuk-summary-list__row ">
                            <dt class="govuk-summary-list__key">
                                Days spent on remand
                            </dt>
                            <dd class="govuk-summary-list__value">
                               ${x.days}
                            </dd>
<!--                           <dd class="govuk-summary-list__actions">-->
<!--                                 <a class="govuk-link" href="#">-->
<!--                                    Remove<span class="govuk-visually-hidden"> Edit</span>-->
<!--                                </a>-->
<!--                            </dd>-->
                        </div>
                    </dl>
                    <div class="govuk-body govuk-!-text-align-right govuk-!-margin-top-2 govuk-!-margin-bottom-9">
                        <a class="govuk-link " href="#">
                                    Remove this period of remand<span class="govuk-visually-hidden"> Remove</span>
                                </a>
</div>
`
  target.innerHTML += html
}

function displayRemandPeriodAsCard(x, target){
  let html = `    
    
    <div class="govuk-summary-card remand">
  <div class="govuk-summary-card__title-wrapper no-heading-title">
    <ul class="govuk-summary-card__actions ">
      <li class="govuk-summary-card__action "> <a class="govuk-link govuk-!-text-align-right" href="#">
          Remove this period of remand<span class="govuk-visually-hidden"> of University of Gloucestershire</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="govuk-summary-card__content">
<dl class="govuk-summary-list govuk-!-margin-bottom-0">
   
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                               Remand period
                            </dt>
                            <dd class="govuk-summary-list__value">
                               ${x.start} to ${x.end}
                            </dd>
                            <dd class="govuk-summary-list__actions">
                                <a class="govuk-link" href="#">
                                    Edit<span class="govuk-visually-hidden"> Edit</span>
                                </a>
                            </dd>
                        </div>
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                               Offences
                            </dt>
                            <dd class="govuk-summary-list__value">
                                <ul class="govuk-list">
                                    ${listOffences(x.offences)}
                                </ul>
                            </dd>
                            <dd class="govuk-summary-list__actions">
                                <a class="govuk-link" href="#">
                                    Edit<span class="govuk-visually-hidden"> Edit</span>
                                </a>
                            </dd>
                        </div>
                        <div class="govuk-summary-list__row ">
                            <dt class="govuk-summary-list__key">
                                Days spent on remand
                            </dt>
                            <dd class="govuk-summary-list__value">
                               ${x.days}
                            </dd>
<!--                           <dd class="govuk-summary-list__actions">-->
<!--                                 <a class="govuk-link" href="#">-->
<!--                                    Remove<span class="govuk-visually-hidden"> Edit</span>-->
<!--                                </a>-->
<!--                            </dd>-->
                        </div>
                    </dl>
  </div>
</div>

`
  target.innerHTML += html
}

function listOffences(offences) {
  let html = ``
  for(let x of offences){
    let row = `<li>${x.offence}<br><span class="govuk-hint">${x.date}</span></li>`
    html += row
  }
  return html
}
//index page

const AddNewTaggedBailLink =document.getElementById("AddNewTaggedBail")
let journey = "Home"
if(AddNewTaggedBailLink){
  addTaggedBailDaysButton.addEventListener("click", function(e){
    e.preventDefault()
    journey = "Tagged Bail"
    location.href = `select-case.html`
  })
}

//unused deductions
let unusedDeductions = document.getElementById("unusedDeductionsContainer");

if(unusedDeductions) {
  console.log(activeJourney, 'u')
  //document.getElementById('unusedDeductions').innerHTML = totalDays
  //document.getElementById('unusedDeductions').innerHTML = totalDays
  let unusedRemand = localStorage.getItem('unusedRemand')
  let unusedTaggedBail = localStorage.getItem('unusedTaggedBail')
  let displayTB = unusedTaggedBail ? unusedTaggedBail : 0
  let displayR = unusedRemand ? unusedRemand : 0
  let html = `
<h2 class="govuk-heading-m govuk-!-padding-left-4">
                        Unused deductions
                    </h2>
<div id="unusedDeductions" class="">

<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Unused remand
    </dt>
    <dd class="govuk-summary-list__value">
      ${displayR} days
    </dd>
  </div>
    <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Unused tagged bail
    </dt>
    <dd class="govuk-summary-list__value">
     ${displayTB} days
    </dd>
  </div>
</dl>
</div>

`
console.log(unusedTaggedBail)
  if(totalDays >=50) {
    unusedDeductions.innerHTML = html
  }
}

//add remand save page
let saveTable = document.getElementById('tableBody')
if(saveTable){

console.log(activeJourney,'u')
  document.getElementById('saveTableTotal').innerHTML = totalDays
  if(activeJourney === 3) {
    console.log('if')
    let alert = `
        <h2 class="govuk-heading-m">There are 90 days of unused deductions</h2>
        <p class="">
            Unused deductions can include remand and tagged bail. They will not be taken into the calculation, but can be carried over to future licence recall cases.
        </p>
        <p class="">For deductions, you will need to add the unused remand alert on NOMIS.</p>
`
    document.getElementById("alerthere").innerHTML = alert
  } else {
    console.log('else')
    let alert = `
        <h2 class="govuk-heading-m">There are 10 days of unused deductions</h2>
        <p class="">
            Unused deductions can include remand and tagged bail. They will not be taken into the calculation, but can be carried over to future licence recall cases.
        </p>
        <p class="">For deductions, you will need to add the unused remand alert on NOMIS.</p>
`
    document.getElementById("alerthere").innerHTML = alert
  }
  function createDays(data){
    let days = 0;
    for(let x of byType){
      days += x.days;
    }
    return days
  }

  let byType = filterAdjustmentsByType("Remand")
  let remandDays = createDays(byType)

function createTableRow(data){
  let html = ``
  for(let x of data){
    let row = `  <tr class="govuk-table__row">
                            <td scope="row" class="govuk-table__cell">${x.start} to ${x.end}</td>
                            <td class="govuk-table__cell">${x.days}</td>
                        </tr>`
    html += row
  }
  return html
}

  let html = `${createTableRow(byType)}`
  document.getElementById('saveTableTotal').innerHTML = remandDays
  saveTable.innerHTML = html
}

let saveTableR = document.getElementById('tableBody-2')
if(saveTableR){

  console.log(activeJourney,'u')
  document.getElementById('saveTableTotal').innerHTML = totalDays
  if(activeJourney === 3) {
    console.log('if')
    let alert = `
        <h2 class="govuk-heading-m">There are 90 days of unused deductions</h2>
        <p class="">
            Unused deductions can include remand and tagged bail. They will not be taken into the calculation, but can be carried over to future licence recall cases.
        </p>
        <p class="">For deductions, you will need to add the unused remand alert on NOMIS.</p>
`
    document.getElementById("alerthere").innerHTML = alert
  } else {
    console.log('else')
    let alert = `
        <h2 class="govuk-heading-m">There are 10 days of unused deductions</h2>
        <p class="">
            Unused deductions can include remand and tagged bail. They will not be taken into the calculation, but can be carried over to future licence recall cases.
        </p>
        <p class="">For deductions, you will need to add the unused remand alert on NOMIS.</p>
`
    document.getElementById("alerthere").innerHTML = alert
  }
  function createDays(data){
    let days = 0;
    for(let x of byType){
      days += x.days;
    }
    return days
  }

  let byType = filterAdjustmentsByType("Remand")
  let remandDays = createDays(byType)

  function createTableRow(data){
    console.log(data)
    let html = ``
    for(let x of data){
      let row = `  <tr class="govuk-table__row">
                            <td scope="row" class="govuk-table__cell">${x.start} to ${x.end}</td>
                            <td class="govuk-table__cell">${x.days}</td>
<!--                            <td class="govuk-table__cell"><a href="#">Remove</a></td>-->
                        </tr>`
      html += row
    }
    return html
  }

  let html = `${createTableRow(byType)}`
  document.getElementById('saveTableTotal').innerHTML = remandDays
  saveTableR.innerHTML = html
}

//add remand select offences page
if(addOffencesButton) {
  let activeId = caseNo
  //get record
  const result = dates.find(({ caseNo }) => caseNo === activeId);
  console.log(result)
  const numberOfDays = document.getElementById("Days")
  numberOfDays.innerHTML = result.days
  let store = []
  addOffencesButton.addEventListener("click", function (e) {
    e.preventDefault()
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked').valueOf()
    //store offences
    for (let x of checkboxes) {
        let offence = {
          offence: x.value,
          court:x.getAttribute("data-court"),
          date:x.getAttribute("data-offence-date"),
          date2:x.getAttribute("data-offence-date-date"),
          ref:x.getAttribute("data-case-ref"),
          id:x.getAttribute("data-id")
        }
        store.push(offence)
    }


    //build new object
    let remandPeriod = {
      id: createID(adjustments),
      type: result.type,
      start: result.start,
      end: result.end,
      days: result.days,
      caseNo: result.caseNo,
      fromDay: result.fromDay,
      toDay: result.toDay,
      fromMonth: result.fromMonth,
      toMonth: result.toMonth,
      toYear: result.toYear,
      fromYear: result.fromYear,
      offences: store
    }

    adjustments.push(remandPeriod)
    localStorage.setItem('adjustments', JSON.stringify(adjustments))

    location.href = `review-2.html`;
  })
}
if(addDatesButton) {
  console.log("enter dates")
  addDatesButton.addEventListener("click", function (e) {
    e.preventDefault()

    //create date
    const from = createDate(fromDay, fromMonth, fromYear);
    const to = createDate(toDay, toMonth, toYear);
    //work out days
    const days = createDaysAdded(fromDay, fromMonth, fromYear, toDay, toMonth, toYear);
    let cn = createCaseNo(caseNo)
    //add dates to local storage
    addDates("Remand", from, to, days, cn)

    //go to next page
    location.href = `select-offences.html`;
  })
}


/////tagged bail


let SelectCase = document.getElementById("SelectCase")

if(SelectCase){
  let selectCaseLinks = document.getElementsByClassName("select-case-link")
  let newCase = []
  Array.from(selectCaseLinks).forEach(function(selectedLink)
  {
    selectedLink.addEventListener('click', function (e) {
      e.preventDefault()


      let selectedCase = {
        court: selectedLink.getAttribute("data-court"),
        date: selectedLink.getAttribute("data-date"),
        ref: selectedLink.getAttribute("data-case")
      }
      console.log(selectedCase)
      newCase.push(selectedCase)
      localStorage.setItem('TBcase', JSON.stringify(newCase))
      location.href = `add-tagged-bail.html`;
    })
  })
}
if(addCaseButton) {
  let radios = document.getElementsByClassName("govuk-radios__input")


  addCaseButton.addEventListener("click", function (e){
    e.preventDefault()
    let selectedCase = {}
    for(let x of radios) {
      if(x.checked) {
        console.log(x.getAttribute("data-case"))
        let selectedCase ={
          court: x.value,
          date:x.getAttribute("data-date"),
          ref:x.getAttribute("data-case")
        }
        TBcase.push(selectedCase)
        localStorage.setItem('TBcase', JSON.stringify(TBcase))
      }
    }
    location.href = `add-tagged-bail.html`;
  })
}

if(addTaggedBailDaysButton) {
  console.log(TBcase)
  let tbc = adjustments.length-1;
  console.log(tbc,'8')
  const TBDays = document.getElementById("taggedBailDays")
  addTaggedBailDaysButton.addEventListener("click", function(e){
    e.preventDefault()


    let taggedBail = {
      id: createID(adjustments),
      caseNo: createCaseNo(caseNo),
      type: "Tagged Bail",
      court:TBcase[0].court,
      date:TBcase[0].date,
      ref:TBcase[0].ref,
      days: parseInt(TBDays.value)
    }
    adjustments.push(taggedBail)
    localStorage.setItem('adjustments', JSON.stringify(adjustments))
    location.href = `review-tagged-bail.html`;
  })
}

//save tagged bail edit
if(saveTaggedBailButton){
  let activeId = caseNo
  //get record
  console.log(adjustments)
  let byType = filterAdjustmentsByType("Tagged Bail")
  const result = byType.find(({ caseNo }) => caseNo === activeId);
  let dataTarget = document.getElementById('ReviewTaggedBail')
 let html = `

<dl class="govuk-summary-list govuk-!-margin-bottom-9">
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                               Case details
                            </dt>
                            <dd class="govuk-summary-list__value govuk-!-width-three-quarters">
                               ${result.court} |
                               <span>${result.ref}</span>  <span class="moj-badge moj-badge--grey">Recall</span><br>
                               <span>${result.date}</span>
                            </dd>
                            <dd class="govuk-summary-list__actions">
                                <a class="govuk-link" href="select-case">
                                    Edit<span class="govuk-visually-hidden"> Edit</span>
                                </a>
                            </dd>
                        </div>
                        <div class="govuk-summary-list__row">
                            <dt class="govuk-summary-list__key">
                                Number of days 
                            </dt>
                            <dd class="govuk-summary-list__value">
                               ${result.days}
                            </dd>
                            <dd class="govuk-summary-list__actions">
                                <a class="govuk-link" href="add-tagged-bail.html">
                                    Edit<span class="govuk-visually-hidden"> Edit</span>
                                </a>
                            </dd>
                        </div>
                    </dl>
`
  dataTarget.innerHTML = html
  saveTaggedBailButton.addEventListener('click', function(){
    let journey = saveTaggedBailButton.getAttribute('data-journey')
    localStorage.setItem('activeJourney', parseInt(journey))
    localStorage.setItem('unusedTaggedBail', 10)

    if (activeJourney == 1){
      localStorage.setItem('unusedRemand', 90)
      localStorage.setItem('unusedTaggedBail', 10)
    } else {
      localStorage.setItem('unusedRemand', 0)
      localStorage.setItem('unusedTaggedBail', 10)
    }
    localStorage.setItem('activeJourney', parseInt(journey))

    //set unused tagged bail to 10
  })
}

//edit tagged bail
let editTaggedBail = document.getElementById('EditTaggedBail')
if(editTaggedBail) {
  console.log(adjustments)
  let byType = filterAdjustmentsByType("Tagged Bail")
  //const result = byType.find(({ caseNo }) => caseNo === selectedRemandPeriodID);
  const result = adjustments.filter(({ caseNo }) => caseNo === selectedRemandPeriodID);
  let html = `
<dl class="govuk-summary-list govuk-!-margin-bottom-9">
      <div class="govuk-summary-list__row">
          <dt class="govuk-summary-list__key">
             Case details
          </dt>
          <dd class="govuk-summary-list__value">
             ${result[0].court} | 
             <span>${result[0].ref}</span>
             <br>
             <span>${result[0].date}</span>
          </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="edit-case.html">
                  Edit<span class="govuk-visually-hidden"> Edit</span>
              </a>
          </dd>
      </div>
      <div class="govuk-summary-list__row">
          <dt class="govuk-summary-list__key">
              Number of days 
          </dt>
          <dd class="govuk-summary-list__value">
             ${result[0].days}
          </dd>
          <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="edit-days.html">
                  Edit<span class="govuk-visually-hidden"> Edit</span>
              </a>
          </dd>
      </div>
  </dl>
`
  editTaggedBail.innerHTML = html
}

//edit tagged bail days
let editTaggedBailDays = document.getElementById('edit-tagged-bail-days-button')
if(editTaggedBailDays) {
  console.log(selectedRemandPeriodID)
  let byType = filterAdjustmentsByType("Tagged Bail")
  const record = byType.find(({ caseNo }) => caseNo === selectedRemandPeriodID);
  //const adjustemntsMinusRecord = adjustments.filter(({ caseNo }) => caseNo === selectedRemandPeriodID);
  let newArray = adjustments.filter(({ caseNo }) => caseNo !== selectedRemandPeriodID );
  let taggedBailDays = document.getElementById('taggedBailDays')

  taggedBailDays.value=record.days



  editTaggedBailDays.addEventListener('click', function(e){
    e.preventDefault()
    let selectedCase = {
      court: record.court,
      date: record.date,
      ref: record.ref,
      days:parseInt(taggedBailDays.value),
      caseNo: record.caseNo,
      type:record.type
    }
    newArray.push(selectedCase)
    updateAdjustmentsList(newArray)
    console.log(adjustments)
    location.href = `edit-tagged-bail-save.html`;
  })
}

let EditCase = document.getElementById('EditCase')
if (EditCase){
  let selectCaseLinks = document.getElementsByClassName("select-case-link")
  console.log(selectedRemandPeriodID )
  let yt = adjustments.filter(({ caseNo }) => caseNo === selectedRemandPeriodID );
  //remove case
  let newArray = adjustments.filter(({ caseNo }) => caseNo !== selectedRemandPeriodID );


    let updatedCase = []
    Array.from(selectCaseLinks).forEach(function(selectedLink)
    {
      selectedLink.addEventListener('click', function (e) {
        e.preventDefault()
        taggedBailEdited = true;
        let selectedCase = {
          court: selectedLink.getAttribute("data-court"),
          date: selectedLink.getAttribute("data-date"),
          ref: selectedLink.getAttribute("data-case"),
          days:yt[0].days,
          caseNo: yt[0].caseNo,
          type:yt[0].type
        }

        newArray.push(selectedCase)
        console.log(newArray,'new')
        updateAdjustmentsList(newArray)
        //localStorage.setItem('adjustments', JSON.stringify(newArray))

        console.log(adjustments, 'yes')

        location.href = `edit-tagged-bail-save.html`;
      })
    })


}







const addAnotherRadios = document.getElementsByClassName('add-another');

const fromDay = document.getElementById('from-day');
const fromMonth = document.getElementById('from-month');
const fromYear = document.getElementById('from-year');

const toDay = document.getElementById('to-day');
const toMonth = document.getElementById('to-month');
const toYear = document.getElementById('to-year');

const numberOfDays = document.getElementById('number-of-days');

function addDates(type, start, end, days, caseNo) {
  let newDates = {
    type: type,
    start: start,
    end: end,
    days: days,
    caseNo: caseNo,
    fromDay:fromDay.value,
    fromMonth:fromMonth.value,
    fromYear:fromYear.value,
    toDay:toDay.value,
    toMonth:toMonth.value,
    toYear:toYear.value
  }

  dates.push(newDates)
  localStorage.setItem('dates', JSON.stringify(dates))
  console.log(dates)
}

function createCaseNo(x){
  let newCaseNo = x+1
  localStorage.setItem('caseNo',newCaseNo)
  return newCaseNo


}


///// index page


// if(indexPage) {
//   // RemandScreenCount = document.getElementById("RemandTotal");
//   // TaggedBailScreenCount = document.getElementById("TaggedBailTotal");
//   // console.log(adjustments)
//   // //get counts
//   // remandCount = getCount(RemandScreenCount)
//   // displayViewLink("remand", remandCount)
//   //displayViewLink("remand", TaggedBailScreenCount)
//   //if greater than 0 display view
// }
function getCount(element){
  let count = parseInt(element.innerHTML)
  return count;
}
function displayViewLink(adjustment, days) {
  if(days >= 1) {
    let adjustmentName = adjustment
    let element = "view-"+adjustmentName
    let target = document.getElementsByClassName(element)[0]
    //view-remand
    target.classList.remove('moj-hidden')
  }
}

//display tagged bail count on exit
const taggedBailCount = document.getElementById('TaggedBailTotal')
const RemandCount = document.getElementById('RemandTotal')
const RemandUpdatedContainer = document.getElementById('RemandUpdated')
const UALCount = document.getElementById('UALTotal')
const UALupdatedContainer = document.getElementById('UALupdated')
const RADACount = document.getElementById('RADATotal')
const RADAupdatedContainer = document.getElementById('RADAupdated')
const RemandViewLink = document.getElementById('viewRemand')
const TaggedBailViewLink = document.getElementById('viewTaggedBail')
const UALViewLink = document.getElementById('viewUAL')
const RADAViewLink = document.getElementById('viewRADA')
let indexPage = document.getElementById("indexPage")
let notificationContainer = document.getElementById("notificationContainer")
if(indexPage) {
  console.log(adjustments)
  console.log(activeJourney, 'k' , unusedRemand, "ur" , unusedTaggedBail, "utb")
  let unusedTBD = document.getElementById("UTB");
  let unusedRD = document.getElementById("UR");
 if(unusedTBD && unusedTaggedBail >= 1) {
     unusedTBD.innerHTML = `including <span id="UnusedTaggedBail">${unusedTaggedBail}</span> days unused `
     console.log("UTB")
 }

 if(unusedRD && unusedRemand >= 1) {

     unusedRD.innerHTML = `including <span id="UnusedRemand">${unusedRemand}</span> days unused `
     console.log("UTR")

 }

  displayAdjustmentTotals("Tagged Bail", taggedBailCount, TaggedBailViewLink)
  displayAdjustmentTotals("Remand", RemandCount, RemandViewLink)
  displayAdjustmentTotals("UAL", UALCount, UALViewLink)
  displayAdjustmentTotals("RADA", RADACount, RADAViewLink)
  displayNotification(activeJourney, notificationContainer)
  showLastUpdatedText(RemandCount,RemandUpdatedContainer)
  showLastUpdatedText(RADACount,RADAupdatedContainer)
  showLastUpdatedText(UALCount,UALupdatedContainer)


}

//for tagged bail table design
const TaggedBailDetails = document.getElementById('TaggedBailDetails');

if(TaggedBailDetails){
  const totalTB = document.getElementById('totalTB');
  let total = 0
  let taggedBailPeriods = filterAdjustmentsByType("Tagged Bail")
  console.log( taggedBailPeriods)
  taggedBailPeriods.forEach((item)=> {
    createTBRow(item,TaggedBailDetails)
    console.log(item.days)
    total += +item.days
  })
  console.log(total)
  totalTB.innerHTML = total
  let editLinks = document.getElementsByClassName("edit-link")
  let deleteLinks = document.getElementsByClassName("delete-link")
  selectItemByLink(deleteLinks, "delete-tagged-bail")
  selectItemByLink(editLinks, "edit-tagged-bail")


}

function createTBRow(item, target){
  let html = `
  <tr class="govuk-table__row">
      <td  class="govuk-table__cell">${item.court}</td>
      <td  class="govuk-table__cell">${item.ref}</td>
      <td  class="govuk-table__cell">${item.days}</td>
      <td class="govuk-table__cell">
          <a href="edit-case.html" class="edit-link" data-caseNo="${item.caseNo}">Edit</a>
          <a href="edit-days.html" class="delete-link govuk-!-margin-left-4" data-caseNo="${item.caseNo}">Delete</a>
      </td>
  </tr>
  `
  target.innerHTML += html

}
let editTaggedBailButton = document.getElementById('editTaggedBailButton')
console.log(taggedBailEdited)
if(editTaggedBailButton){
  editTaggedBailButton.addEventListener('click', function(){

    localStorage.setItem('activeJourney', 3)
  })

}
let DeleteTaggedBailPage = document.getElementById('DeleteTaggedBailPage')
if(DeleteTaggedBailPage) {

  let date = document.getElementById('PeriodDate')
  let deletebutton = document.getElementById('DeleteTaggedBail')
  let days = document.getElementById('PeriodDays')
  let adjustmentsByType = filterAdjustmentsByType("Tagged Bail")
  let period = filterAdjustmentsByID(selectedRemandPeriodID, adjustmentsByType)
  console.log(selectedRemandPeriodID)

  date.innerHTML = `${period[0].court} `
  days.innerHTML = `${period[0].days}`


  deletebutton.addEventListener('click', function(e){
    e.preventDefault()
    deleteRecord("Tagged Bail",adjustments, selectedRemandPeriodID)
    let journey = deletebutton.getAttribute('data-journey')
    localStorage.setItem('activeJourney', parseInt(journey))
    location.href = `../index-1.html`;
  })
}

//for tagged bail card design
const TaggedBailList = document.getElementById('TaggedBailList');
if(TaggedBailList){
  //let target = document.getElementById('RemandPeriodListContainer')
  let editLinks = document.getElementsByClassName("edit-link")
  let deleteLinks = document.getElementsByClassName("delete-link")
  let taggedBailPeriods = filterAdjustmentsByType("Tagged Bail")
  let taggedBailPeriodCount = taggedBailPeriods.length
  let totalTaggedBailDays = 0

  for( let x of taggedBailPeriods){
    displayTaggedBailCard(x, TaggedBailList)
    totalTaggedBailDays += x.days;
  }

  selectItemByLink(deleteLinks, "delete-tagged-bail")
}

function displayTaggedBailCard(record, target){
  console.log(record);
  let html =`
    <div class="govuk-summary-card remand">
                        <div class="govuk-summary-card__title-wrapper ">
                            <h2 class="govuk-summary-card__title">${record.court}</h2>
                            <ul class="govuk-summary-card__actions">
                                <li class="govuk-summary-card__action"> <a id="remand${record.caseNo}" data-caseNo="${record.caseNo}" class="govuk-link edit-link" href="edit-tagged-bail.html">
                                    Edit<span class="govuk-visually-hidden"> of University of Gloucestershire</span>
                                </a>
                                </li>
                                <li class="govuk-summary-card__action"> <a class="govuk-link delete-link" href="delete-tagged-bail.html" data-caseNo="${record.caseNo}">
                                    Delete<span class="govuk-visually-hidden"> from University of Gloucestershire</span>
                                </a>
                                </li>
                            </ul>
                        </div>
                        <div class="govuk-summary-card__content">
                            <dl class="govuk-summary-list">
                                <div class="govuk-summary-list__row">
                                    <dt class="govuk-summary-list__key">
                                        Date
                                    </dt>
                                    <dd class="govuk-summary-list__value">
                                        ${record.date}
                                    </dd>
                                </div>
                                <div class="govuk-summary-list__row">
                                    <dt class="govuk-summary-list__key">
                                        Days
                                    </dt>
                                    <dd class="govuk-summary-list__value">
                                        ${record.days}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
  `
  target.innerHTML += html
}
function displayNotification(journey, container){
  const base = '';
  switch (journey) {
    case 1:
      container.innerHTML = `
 
      break;
    case 2:
      container.innerHTML = `
   <div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
                         aria-labelledby="govuk-notification-banner-title"
                         data-module="govuk-notification-banner">
      <div class="govuk-notification-banner__content">
          <h3 class="govuk-notification-banner__heading">
              Remand details have been deleted
          </h3>
            <p class="govuk-body">Once all of the adjustments have been applied, you must
              <a href="crd.html" class="govuk-notification-banner__link">calculate release dates</a>.
          </p>
      </div>
  </div>
`
      break;
    case 3:
      container.innerHTML = `
   <div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
                         aria-labelledby="govuk-notification-banner-title"
                         data-module="govuk-notification-banner">
      <div class="govuk-notification-banner__content">
          <h3 class="govuk-notification-banner__heading">
              Tagged bail information has been saved
          </h3>
           <p class="govuk-body">Once all of the adjustments have been applied, you must
              <a href="crd.html" class="govuk-notification-banner__link">calculate release dates</a>.
          </p>
      </div>
  </div>
`
      break;
    case 4:
      container.innerHTML = `
   <div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
                         aria-labelledby="govuk-notification-banner-title"
                         data-module="govuk-notification-banner">
      <div class="govuk-notification-banner__content">
          <h3 class="govuk-notification-banner__heading">
              Tagged bail has been deleted
          </h3>
          <p class="govuk-body">Once all of the adjustments have been applied, you must
              <a href="crd.html" class="govuk-notification-banner__link">calculate release dates</a>.
          </p>
      </div>
  </div>
`
      break;
    case 5:
      container.innerHTML = `
   <div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
                         aria-labelledby="govuk-notification-banner-title"
                         data-module="govuk-notification-banner">
      <div class="govuk-notification-banner__content">
          <h3 class="govuk-notification-banner__heading">
              Remand updates have been saved
          </h3>
            <p class="govuk-body">Once all of the adjustments have been applied, you must
              <a href="crd.html" class="govuk-notification-banner__link">calculate release dates</a>.
          </p>
      </div>
  </div>
`
      break;
    case 6:
      container.innerHTML = `
   <div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
                         aria-labelledby="govuk-notification-banner-title"
                         data-module="govuk-notification-banner">
      <div class="govuk-notification-banner__content">
          <h3 class="govuk-notification-banner__heading">
              RADA information has been saved
          </h3>
           <p class="govuk-body">Once all of the adjustments have been applied, you must
              <a href="crd.html" class="govuk-notification-banner__link">calculate release dates</a>.
          </p>
      </div>
  </div>
`
      break;
    case 7:
      container.innerHTML = `
   <div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
                         aria-labelledby="govuk-notification-banner-title"
                         data-module="govuk-notification-banner">
      <div class="govuk-notification-banner__content">
          <h3 class="govuk-notification-banner__heading">
              UAL information has been saved
          </h3>
            <p class="govuk-body">Once all of the adjustments have been applied, you must
              <a href="crd.html" class="govuk-notification-banner__link">calculate release dates</a>.
          </p>
      </div>
  </div>
`
      break;
    case 8:
      container.innerHTML = `
   <div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
                         aria-labelledby="govuk-notification-banner-title"
                         data-module="govuk-notification-banner">
      <div class="govuk-notification-banner__content">
          <h3 class="govuk-notification-banner__heading">
              RADA details have been deleted
          </h3>
            <p class="govuk-body">Once all of the adjustments have been applied, you must
              <a href="crd.html" class="govuk-notification-banner__link">calculate release dates</a>.
          </p>
      </div>
  </div>
`
      break;
    case 9:
      container.innerHTML = `
   <div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
                         aria-labelledby="govuk-notification-banner-title"
                         data-module="govuk-notification-banner">
      <div class="govuk-notification-banner__content">
          <h3 class="govuk-notification-banner__heading">
              UAL details have been deleted
          </h3>
            <p class="govuk-body">Once all of the adjustments have been applied, you must
              <a href="crd.html" class="govuk-notification-banner__link">calculate release dates</a>.
          </p>
      </div>
  </div>
`
    default:
      ``
  }

}
if(taggedBailCount){
  const result = adjustments.filter(({ type }) => type === "Tagged Bail");
  console.log(journey,"3")
  let lastUpdateContainer = document.getElementById("updated")
  showLastUpdatedText(taggedBailCount,lastUpdateContainer)

}

function showLastUpdatedText(adjustmentCount, updatedContainer){
  let countTotal = parseInt(adjustmentCount.innerHTML);
  //create date
  let today = new Date();
  let dd = today.getDate().toString();
  let mm = today.getMonth()+1;
  let mstring = mm.toString()
  let yyyy = today.getFullYear().toString();
 let createdDay =  createGDSDate(dd,mstring,yyyy)
  console.log(createdDay)
  if(countTotal > 0){
    //updatedContainer.innerHTML = "Last updated on 9 jun 2023 by HMP Kirkham "
    updatedContainer.innerHTML = `Last updated on ${createdDay} by HMP Kirkham `
  }
}

let saveRemandButton = document.getElementById('saveRemandButton')

if(saveRemandButton) {
  saveRemandButton.addEventListener('click', function(){
    let journey = saveRemandButton.getAttribute('data-journey')


    if (activeJourney == 3){
      localStorage.setItem('unusedRemand', 90)
      localStorage.setItem('unusedTaggedBail', 10)
    } else {
      localStorage.setItem('unusedRemand', 10)
      localStorage.setItem('unusedTaggedBail', 0)
    }
    localStorage.setItem('activeJourney', parseInt(journey))



    //set unused remand to 90
  })
}
function displayAdjustmentTotals(adjustment ,target, linkContainer){
  console.log("called")
  const result = adjustments.filter(({ type }) => type === adjustment);
console.log(result, 'uuuu')
  let total = 0
  if(result.length >= 0) {
    for (let x of result) {
      total += +x.days
    }
    showViewLink(total,linkContainer )
    target.innerHTML = total
  } else {
    return 0
  }
}



const ViewRemandPage = document.getElementById('ViewRemandPage')

if(ViewRemandPage){

  let screenRemandPeriods = document.getElementById("RemandPeriodsCount")
  let editLinks = document.getElementsByClassName("edit-link")
  let deleteLinks = document.getElementsByClassName("delete-link")
  let screenRemandCount = document.getElementById("TotalRemandDays")
  let target = document.getElementById('RemandPeriodListContainer')
  let viewRemandSummary = document.getElementById('viewRemandSummary')
  let remandPeriods = filterAdjustmentsByType("Remand")
  let remandPeriodCount = remandPeriods.length
  let totalRemandDays = 0
  let remandSummaryTable = document.getElementById("R-summary")
  console.log(remandPeriods.length, totalRemandDays)


  for( let x of remandPeriods){
    displayRemandCard(x, target)
    displayRemandSummaryRow(x, remandSummaryTable)
    totalRemandDays += x.days;
  }
  if(remandPeriods.length < 2){
    viewRemandSummary.classList.add("moj-hidden")
  }

  screenRemandCount.innerHTML = totalRemandDays
  function displayRemandSummaryRow(data, target) {
    let html = ` <tr class="govuk-table__row">
                                    <td scope="row" class="govuk-table__cell">From ${data.start} to ${data.end}</td>
                                    <td id="" class="govuk-table__cell">${data.days}</td>
                                </tr>`
    target.innerHTML += html

  }
  Array.from(editLinks).forEach(function(selectedLink) {
    selectedLink.addEventListener('click', function (e) {
      e.preventDefault()
      localStorage.setItem('SelectedRemandPeriod', selectedLink.getAttribute('data-caseNo'))
      //selectedRemandPeriodID = selectedLink.getAttribute('data-caseNo')
      location.href = `edit.html`;
    })
  })

  //combine these

  // Array.from(deleteLinks).forEach(function(selectedLink) {
  //   selectedLink.addEventListener('click', function (e) {
  //     e.preventDefault()
  //     localStorage.setItem('SelectedRemandPeriod', selectedLink.getAttribute('data-caseNo'))
  //     //selectedRemandPeriodID = selectedLink.getAttribute('data-caseNo')
  //     location.href = `delete.html`;
  //   })
  // })
  selectItemByLink(deleteLinks, "delete")
  selectItemByLink(editLinks, "edit")




  //console.log(totalRemandDays, remandPeriodCount)
}
//view remand page using a table
let RemandTableBody = document.getElementById('RemandTableBody');
if (RemandTableBody){
  let editLinks = document.getElementsByClassName("edit-link")
  let deleteLinks = document.getElementsByClassName("delete-link")
  let total = document.getElementById('TotalRemandDays')
  let remandPeriods = filterAdjustmentsByType("Remand")


  let totalRemandDays = 0

  for( let x of remandPeriods){
    totalRemandDays += x.days;
  }
  total.innerHTML = totalRemandDays

  displayRemandTableData(remandPeriods)
  selectItemByLink(deleteLinks, "delete")
  selectItemByLink(editLinks, "edit")
}

//edit remand page
let editRemand = document.getElementById('EditRemandPage')
if(editRemand) {
  let saveEditButton = document.getElementById('saveEditButton')
  let date = document.getElementById('PeriodDate')
  let days = document.getElementById('PeriodDays')
  let offences = document.getElementById('OffenceLI')
  let adjustmentsByType = filterAdjustmentsByType("Remand")
  let period = filterAdjustmentsByID(selectedRemandPeriodID, adjustmentsByType)

  date.innerHTML = `From ${period[0].start} to ${period[0].end}`
  days.innerHTML = `${period[0].days}`
  offences.innerHTML = `   <ul class="govuk-list">
                                    ${listOffences(period[0].offences)}
                                </ul>`
//  selectedRecord
  setSelectedRecord(period)
  console.log(datesUpdated, "rr");

  saveEditButton.addEventListener('click', function(e){
    //e.preventDefault()
    //location.href = 'index-1.html'
    //let journey = saveEditButton.getAttribute('data-journey')
    localStorage.setItem('activeJourney', 5)
    localStorage.setItem('unusedRemand', 90)
    localStorage.setItem('unusedTaggedBail', 10)


  })

}

let DateChanged = document.getElementById('DateChanged')
if(DateChanged){
  localStorage.getItem('datesUpdated')
  localStorage.setItem('datesUpdated', JSON.stringify(0))
}
let editRemandPage = document.getElementById('editRemandDates')
//edit remand dates
if(editRemandPage) {
  let editButton = document.getElementById("edit-remand-dates-button")
 //apply placeholders
  fromDay.value = selectedRecord[0].fromDay
  fromMonth.value = selectedRecord[0].fromMonth
  fromYear.value = selectedRecord[0].fromYear

  toDay.value = selectedRecord[0].toDay
  toMonth.value = selectedRecord[0].toMonth
  toYear.value = selectedRecord[0].toYear

  editButton.addEventListener("click", function(e){
    e.preventDefault()
    updateDates(selectedRecord[0].type, selectedRecord[0].caseNo,selectedRecord, fromDay, fromMonth, fromYear, toDay, toMonth, toYear)
    localStorage.getItem('datesUpdated')
    localStorage.setItem('datesUpdated', JSON.stringify(1))
    location.href = "edit-save.html"
  })
}



let OffenceListContainer = document.getElementById('OffenceListContainer')
if(OffenceListContainer){
  let editOffencesButton = document.getElementById('edit-offences-button')
  let checkboxes = Array.from(document.querySelectorAll('input[type=checkbox]'))
  let offences = selectedRecord[0].offences
  let store = [];
  for(let x of offences){
    addCheck(checkboxes,x.id)
  }

  //add event listener
  editOffencesButton.addEventListener('click',function(e){
    e.preventDefault()
    let updateAdjustments = adjustments.filter((record) => record.caseNo !== selectedRecord[0].caseNo)
    let checkedCheckboxes = document.querySelectorAll('input[type=checkbox]:checked').valueOf()
    for (let x of checkedCheckboxes) {
      let offence = {
        offence: x.value,
        court: x.getAttribute("data-court"),
        date: x.getAttribute("data-offence-date"),
        date2: x.getAttribute("data-offence-date-date"),
        ref: x.getAttribute("data-case-ref"),
        id: x.getAttribute("data-id")
      }
      store.push(offence)
    }
    selectedRecord[0].offences = store
    updateAdjustments.push(...selectedRecord)
    updateAdjustmentsList(updateAdjustments)
    location.href = "edit-save.html"
  })
  //remove


}

let deleteRemand = document.getElementById('DeleteRemandPage')
if(deleteRemand) {
  // let screenRemandPeriods = document.getElementById("RemandPeriodsCount")
  // let screenRemandCount = document.getElementById("TotalRemandDays")
  let offences = document.getElementById("OffenceLI")

  let date = document.getElementById('PeriodDate')
  let deletebutton = document.getElementById('DeleteRemandPeriod')
  let days = document.getElementById('PeriodDays')
  let adjustmentsByType = filterAdjustmentsByType("Remand")
  let period = filterAdjustmentsByID(selectedRemandPeriodID, adjustmentsByType)

console.log(selectedRemandPeriodID)
  console.log(period)
  date.innerHTML = `From ${period[0].start} to ${period[0].end}`
  days.innerHTML = `${period[0].days}`
  offences.innerHTML = `   <ul class="govuk-list ">
                                    ${listOffences(period[0].offences)}
                                </ul>`

  deletebutton.addEventListener('click', function(e){
    e.preventDefault()
     deleteRecord("Remand", adjustments, selectedRemandPeriodID)
    let journey = deletebutton.getAttribute('data-journey')
    localStorage.setItem('activeJourney', parseInt(journey))
    location.href = `../index-1.html`;
  })
}


function addCheck(checkboxes, id){
  checkboxes.forEach((checkbox)=>{
    if(checkbox.getAttribute('data-id') === id) {
      checkbox.checked = true;
    }
  })

}
function deleteRecord(type, records, id){
  // let filteredByType = records.filter((record) => record.type === type)
  // console.log(filteredByType)
  let updateAdjustments = adjustments.filter((record) => record.caseNo !== id)
  updateAdjustmentsList(updateAdjustments)
  localStorage.getItem(adjustments)
  localStorage.setItem('adjustments',JSON.stringify(updateAdjustments))
  //return updateAdjustments
}
function updateAdjustmentsList(newData){
  localStorage.getItem('adjustments')
  localStorage.setItem('adjustments', JSON.stringify(newData))

}
function updateDates(type, caseNo, record, fromDay, fromMonth, fromYear, toDay, toMonth, toYear){
  //delete record
  let updateAdjustments = adjustments.filter((record) => record.caseNo !== caseNo)
  //let newList = Array.from(deleteRecord(type, adjustments, caseNo))
  console.log(updateAdjustments)
  //create new record
  let newRecord = {
    type: type,
    start: createDate(fromDay, fromMonth, fromYear),
    end: createDate(toDay, toMonth, toYear),
    days: createDaysAdded(fromDay, fromMonth, fromYear, toDay, toMonth, toYear),
    caseNo: caseNo,
    fromDay:fromDay.value,
    fromMonth:fromMonth.value,
    fromYear:fromYear.value,
    toDay:toDay.value,
    toMonth:toMonth.value,
    toYear:toYear.value,
    offences: record[0].offences
  }
  //add it to list
  updateAdjustments.push(newRecord)
  //update adjustments list
  updateAdjustmentsList(updateAdjustments)
}
function filterAdjustmentsByType(adjustmentType){
  const result = adjustments.filter(({ type }) => type === adjustmentType );
  return result
}
function filterAdjustmentsByID(id, adjustmentsByType){
  const result = adjustmentsByType.filter(({ caseNo }) => caseNo === id );
  return result
}
function setSelectedRecord(newData){
  localStorage.setItem('selectedRecord', JSON.stringify(newData))
}
function getTotalRemandDays(adjustment ,target){
  const result = adjustments.filter(({ type }) => type === adjustment);

  let total = 0
  if(result.length >= 0) {
    for (let x of result) {
      total += +x.days
    }
    console.log(total, adjustment)
    target.innerHTML = total
  } else {
    return 0
  }
}
function showViewLink(days, linkContainer){
  if(days >= 1){
    linkContainer.classList.remove('moj-hidden')
  }
}
function createDaysAdded (fromDay, fromMonth, fromYear, toDay, toMonth, toYear) {
  let fromDate = new Date(fromYear.value + "-" + fromMonth.value + "-" + fromDay.value);
  let toDate = new Date(toYear.value + "-" + toMonth.value + "-" + toDay.value);

  return daysBetweenDates(fromDate, toDate)+1
}
function createDate (day, month, year) {
  let mNumber = parseInt(month.value);
  let monthName;
  switch (mNumber) {
    case 1:
      monthName = 'Jan';
      break;
    case 2:
      monthName = 'Feb';
      break;
    case 3:
      monthName = 'Mar';
      break;
    case 4:
      monthName = 'Apr';
      break;
    case 5:
      monthName = 'May';
      break;
    case 6:
      monthName = 'Jun';
      break;
    case 7:
      monthName = 'Jul';
      break;
    case 8:
      monthName = 'Aug';
      break;
    case 9:
      monthName = 'Sep';
      break;
    case 10:
      monthName = 'Oct';
      break;
    case 11:
      monthName = 'Nov';
      break;
    case 12:
      monthName = 'Dec';
      break;
    default:
      monthName = 'Not recorded ';
  }

  let date = `${day.value} ${monthName} ${year.value}`;
  return date
}

function createGDSDate (day, month, year) {
  let mNumber = parseInt(month);
  let monthName;
  switch (mNumber) {
    case 1:
      monthName = 'Jan';
      break;
    case 2:
      monthName = 'Feb';
      break;
    case 3:
      monthName = 'Mar';
      break;
    case 4:
      monthName = 'Apr';
      break;
    case 5:
      monthName = 'May';
      break;
    case 6:
      monthName = 'Jun';
      break;
    case 7:
      monthName = 'Jul';
      break;
    case 8:
      monthName = 'Aug';
      break;
    case 9:
      monthName = 'Sep';
      break;
    case 10:
      monthName = 'Oct';
      break;
    case 11:
      monthName = 'Nov';
      break;
    case 12:
      monthName = 'Dec';
      break;
    default:
      monthName = 'Not recorded ';
  }

  let date = `${day} ${monthName} ${year}`;
  return date
}
function daysBetweenDates (date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());
  const days = Math.floor(timeDifference / oneDay);
  return days;
}
function getCheckedItem(list){
  let offences = [];
  for (let x of list) {
    if (x.checked){
      offences.push(x.value);
    }
    return offences
  }
}
function selectItemByLink(links, page){
  Array.from(links).forEach(function(selectedLink) {
    selectedLink.addEventListener('click', function (e) {
      e.preventDefault()
      localStorage.setItem('SelectedRemandPeriod', selectedLink.getAttribute('data-caseNo'))
      selectedRemandPeriodID = selectedLink.getAttribute('data-caseNo')
      location.href = page+`.html`;
    })
  })
}

function displayRemandCard(record, target){
  let html =`
    <div class="govuk-summary-card remand">
                        <div class="govuk-summary-card__title-wrapper ">
                            <h2 class="govuk-summary-card__title">From ${record.start} to ${record.end}</h2>
                            <ul class="govuk-summary-card__actions">
                                <li class="govuk-summary-card__action"> <a id="remand${record.caseNo}" data-caseNo="${record.caseNo}" class="govuk-link edit-link" href="edit.html">
                                    Edit<span class="govuk-visually-hidden"> of University of Gloucestershire</span>
                                </a>
                                </li>
                                <li class="govuk-summary-card__action"> <a class="govuk-link delete-link" href="delete.html" data-caseNo="${record.caseNo}">
                                    Delete<span class="govuk-visually-hidden"> from University of Gloucestershire</span>
                                </a>
                                </li>
                            </ul>
                        </div>
                        <div class="govuk-summary-card__content">
                            <dl class="govuk-summary-list">
                                <div class="govuk-summary-list__row">
                                    <dt class="govuk-summary-list__key">
                                        Court name
                                    </dt>
                                    <dd class="govuk-summary-list__value">
                                        ${record.offences[0].court}
                                    </dd>
                                </div>
                                <div class="govuk-summary-list__row">
                                    <dt class="govuk-summary-list__key">
                                        Offences
                                    </dt>
                                    <dd class="govuk-summary-list__value">
                                        <ul class="govuk-list">
                                             ${listOffences(record.offences)}
                                        </ul>
                                    </dd>
                                </div>
                                <div class="govuk-summary-list__row">
                                    <dt class="govuk-summary-list__key">
                                        Days
                                    </dt>
                                    <dd class="govuk-summary-list__value">
                                        ${record.days}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
  `
  target.innerHTML += html
}
function displayRemandTableData(record){
  for(let x of record){
    displayTableRow(x, RemandTableBody )
  }
}
function displayTableRow(data, target) {
  let html = `
  <tr class="govuk-table__row">
                    <td class="govuk-table__cell">
                     ${data.start} - ${data.end}
                    </td>
                    <td class="govuk-table__cell">
                        <table class="govuk-table">
                            <tr>
                             
                                <th class="govuk-table__header govuk-!-width-two-thirds" scope="col">Offence</th>
                                <th class="govuk-table__header  " scope="col">Offence dates</th>
                            </tr>
                            <tbody id="CaseDetails">
                            ${viewRemandTableOffences(data.offences)}
                            </tbody>
                        </table>
                    </td>
                    <td class="govuk-table__cell govuk-!-text-align-right">
                        ${data.days}
                    </td>
                    <td class="govuk-table__cell">
                        <a data-caseNo="${data.caseNo}" class="govuk-link edit-link govuk-!-display-block govuk-!-margin-bottom-4" href="">
                                    Edit<span class="govuk-visually-hidden"> of University of Gloucestershire</span>
                                </a>
                        <a class="govuk-link  delete-link" href="" data-caseNo="${data.caseNo}">
                                    Delete<span class="govuk-visually-hidden"> from University of Gloucestershire</span>
                                </a>
                    </td>
                </tr>
 `
  target.innerHTML += html
}
function viewRemandTableOffences(offences){
  let fr = ``;
offences.forEach((offence)=> {
     let html = `
      <tr>
          <td class="govuk-table__cell">
             ${offence.offence}<br>
             <span class="govuk-hint">
               Case reference: ${offence.ref}
              </span>
          </td>
          <td class="govuk-table__cell  ">
              ${offence.date2}
          </td>
      </tr>
  `
    fr += html}
)
  return fr
}

//ual

const addUALButton = document.getElementById("addUALButton")

if(addUALButton) {

  addUALButton.addEventListener('click', function(e){
    let ualType = document.querySelector('input[name = UALtype]:checked').value;
    let days = createDaysAdded(fromDay, fromMonth, fromYear, toDay, toMonth, toYear);
    let start = createDate(fromDay, fromMonth, fromYear);
    let end = createDate(toDay, toMonth, toYear);
    let id = createID(adjustments)
    //e.preventDefault()


    addUAL('UAL', fromDay.value, fromMonth.value, fromYear.value, toDay.value, toMonth.value, toYear.value, ualType, days, id, start, end )
  })
}
function addUAL (type,  fromDay, fromMonth, fromYear, toDay, toMonth, toYear, ualType, days, id, start, end  ) {
  let newAdjustment = {
    type: type,
    days: days,
    start: start,
    end:end,
    id: id,
    ualType: ualType,
    fromDay: fromDay,
    toDay: toDay,
    fromMonth: fromMonth,
    toMonth: toMonth,
    fromYear: fromYear,
    toYear: toYear
  }

  tempUAL = newAdjustment;
  localStorage.setItem('tempUAL', JSON.stringify(tempUAL))
  //localStorage.setItem('tempUAL', JSON.stringify(tempUAL))
  console.log(adjustments)
  console.log(tempUAL)
}



const saveUALButton = document.getElementById("saveUALButton")
if(saveUALButton){
  const start = document.getElementById("start")
  const end = document.getElementById("end")
  const days = document.getElementById("days")
  const type = document.getElementById("type")


  console.log(adjustments)
  start.innerHTML = tempUAL.start
  end.innerHTML = tempUAL.end
  days.innerHTML = tempUAL.days
  type.innerHTML = tempUAL.ualType

  saveUALButton.addEventListener('click', function(){
    adjustments.push(tempUAL)
    localStorage.setItem('adjustments', JSON.stringify(adjustments))
    //localStorage.setItem('tempUAl',  {})

    let journey = saveUALButton.getAttribute('data-journey')
    localStorage.setItem('activeJourney', parseInt(journey))

  })

}


