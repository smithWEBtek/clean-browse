$(()=>{
  console.log("clean-browse.js loaded ...")
  onButtonClick();
})

function onButtonClick(){
  $('span.action-button').on('click', (event) => {
    if(event.currentTarget.dataset.id === 'remove'){
      removeCode()
    } else if (event.currentTarget.dataset.id === 'undo-last'){
      console.log('execute undo-last code')
 
    } else if (event.currentTarget.dataset.id === 'undo-all') {
      console.log('execute undo-all code')
 
    }
  })
}

function removeCode() {
  console.log('exeycute remove code')
  
  // readySelect
    // page should light up, indicating we're ready for user select
    // visible yellow border with msg: "CLICK ON THE ANNOYING THING"

  // userSelect
    // user click on something that is annoying
    // we add the css selectors from the annoyingThings
    // to our list of annoying things to hide

  // addAnnoyingThing
    // we call the hideAnnoyingThings function
    // pass the new annoying thing selector to the lastThingClicked variable
    // listen for click of undoLast button
    // if clicked, remove the lastThingClicked from the

  // removeLastAnnoyingThing
    // pop()

  // emptyAnnoyingThingsList
  // refresh the browser
}
