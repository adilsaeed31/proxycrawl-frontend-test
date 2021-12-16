// Example...
// Avoid using jquery if possible.
$(document).ready(() => {
  console.log('Index page');

  document.getElementById('ajax').addEventListener('submit', function (event) {
    event.preventDefault();

    document.querySelector('#ajaxSubmitBtn').disabled = true;
    document.querySelector('#spinner').style.display = 'inline-block';

    const data = {
      token: document.querySelector('#token').value,
      url: document.querySelector('#url').value,
    };

    fetch('https://proxycrawl-frontend-test.herokuapp.com/product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        document.querySelector('.index').innerHTML = data;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});
