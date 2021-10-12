const fileForm = document.querySelector("#fileForm")
const fileInput = document.querySelector("#fileInput")

fileForm.addEventListener("submit", async Event => {
    Event.preventDefault()
    const file = fileInput.files[0]

    const { url } = await fetch("./s3Url").then(res => res.json())
    console.log({url})

 })
