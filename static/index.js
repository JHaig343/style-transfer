
// Send the images to generate a stylized one
function sendImages() {
    const imageSpace = document.querySelector('img');
    const formData = new FormData();

    const contentFile = document.getElementById('contentImage');
    const styleFile = document.getElementById('styleImage');
    formData.append('contentImage', contentFile.files[0]);
    formData.append('styleImage', styleFile.files[0]);
    formData.append('savename', 'testFlask.png');

    fetch('/baseImages', {
        method: 'POST',
        body: formData,

    }).then(response => response.blob())
    .then(result => {
        imageSpace.src = URL.createObjectURL(result);
        console.log("Success: ", result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}



// test request
async function sendTestRequest() {
    const response = await fetch('/test', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: {
            "foo": "bar"
        }
    });
    console.log(response.ok);
    return response; //Response is just a string right now; .json() if JSON response
}

// Double layers of then... fine...
function testSend() {
    let bar = document.getElementById('foo');
    sendTestRequest().then(data => { data.text().then(text => { bar.innerHTML = text; } ); });
}