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

  var editIcon = document.getElementById('editIcon')
  var saveIcon = document.getElementById('saveIcon')
  editIcon.addEventListener('click', function () {
    editIcon.parentElement.classList.add('hidden')
    saveIcon.parentElement.classList.remove('hidden')
  })
  saveIcon.addEventListener('click', function () {
    storeApiKey()
    saveIcon.parentElement.classList.add('hidden')
    editIcon.parentElement.classList.remove('hidden')
  })

  // get user's api key from storage and render it to the apiKeyStored span
  chrome.storage.sync.get(['apiKey'], function (result) {
    const apiKey = result.apiKey
    document.getElementById('apiKeyStored').textContent = apiKey
    if (!apiKey) {
      editIcon.parentElement.classList.add('hidden')
      saveIcon.parentElement.classList.remove('hidden')
    }
  })
})

// a function to store user's api key
function storeApiKey() {
  const apiKey = document.getElementById('apiKey').value

  if (apiKey.length) {
    chrome.storage.sync.set({ apiKey }, function () {
      document.getElementById('apiKeyStored').textContent = apiKey
    })
  }
}
