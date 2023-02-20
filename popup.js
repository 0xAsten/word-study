function generateSentence() {
  let words = document.getElementById('wordInput').value.trim().split(/\s+/)
  console.log(words)
  let sentence = 'hell world'
  document.getElementById('output').textContent = sentence
}

document.addEventListener('DOMContentLoaded', function () {
  var submitButton = document.getElementById('submitButton')
  // onClick's logic below:
  submitButton.addEventListener('click', function () {
    generateSentence()
  })
})
