alert('Hello World!');



window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('myCoolButton').addEventListener('click', () => {
        const userText = document.getElementById('name').value;
        const url = '/search/' + userText; // This should remind you of APIs in Python!

        console.log('Button was clicked by'); // console.log is like printing in JS!
        console.log(userText);
        window.fetch(url).then(response => response.json()) // So should JSON conversion!
            .then(data => { // .then will only run the function *once* the data is fetched from the internet
                console.log(data); // See what this logs!
        });
        
    });
};


