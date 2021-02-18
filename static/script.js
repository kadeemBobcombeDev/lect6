alert('Hello World!');



window.onload = () => { // onload makes sure the content is loaded on page first
    document.getElementById('myCoolButton').addEventListener('click', () => {
        const userText = document.getElementById('input').value;
        //document.getElementById('topic').textContent = userText;
        console.log('Button was clicked by'); // console.log is like printing in JS!
        console.log(userText);

        //document.getElementById('topic').textContent = userText;
        const url = '/search/' + userText; // This should remind you of APIs in Python!
        alert('This button was clicked');
        console.log(url)
        window.fetch(url).then(response => response.json()) // So should JSON conversion!
            .then(article => { // .then will only run the function *once* the data is fetched from the internet
                console.log(article['headlines']);// See what this logs!
                const container = document.getElementsByClassName('container')[0];
                article['headlines'].forEach(headline => {
                    const newHeadline = document.createElement("div");
                    newHeadline.textContent = headline;
                    container.appendChild(newHeadline);
                });
                article['snippets'].forEach(snippet => {
                    const newSnippet = document.createElement("dive");
                    newSnippet.textContent = snippet;
                    container.appendChild(newSnippet);
                });
                 
    });

});
};
