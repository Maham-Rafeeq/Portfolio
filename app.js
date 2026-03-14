let sidebar =document.getElementById("list")
  function openmenu(){
    sidebar.style.right ="0px"
  }
  function closemenu(){
    sidebar.style.right ="-250px"
  }
const scriptURL = 'https://script.google.com/macros/s/AKfycbxJFz0D94wratYpvGlfCz0Q-vtQjhDiaauvBGZLvckLSA11gO-kgVAtT1wjjGJ7B39AeQ/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(response => {
      console.log('Success!', response)
      alert('Message sent successfully! ✅')
      form.reset()
    })
    .catch(error => {
      console.error('Error!', error.message)
      alert('Something went wrong ❌ ' + error.message)
    })
})