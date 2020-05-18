$(()=>{
  console.log("clean-browse.js loaded ...")
  onButtonClick();
})

function onButtonClick(){
  $('span.action-button').on('click', (event) => {
    if(event.currentTarget.dataset.id === 'remove'){
      console.log('remove clicked')
    } else if (event.currentTarget.dataset.id === 'undo-last'){
      console.log('undo-last clicked')
    } else if (event.currentTarget.dataset.id === 'undo-all') {
      console.log('undo-all clicked')
    }
  })
}
