const scriptURL = 'https://script.google.com/macros/s/AKfycbypcMNSee-D_Bv9K8N3O8nA1EMMzZHNtcLDdf7_vdJJCRSEkCnpTedsnvwHdQZdbQnh/exec'
const form = document.forms['submit-to-google-sheet']
const msq = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerText = "Thank You For Subscribing!"
            setTimeout(()=>{
                msg.innerText = ""
            },4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})