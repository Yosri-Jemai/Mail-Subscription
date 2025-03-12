const scriptURL = 'https://script.google.com/macros/s/AKfycbypcMNSee-D_Bv9K8N3O8nA1EMMzZHNtcLDdf7_vdJJCRSEkCnpTedsnvwHdQZdbQnh/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})