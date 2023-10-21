document.addEventListener('DOMContentLoaded', function () {
    
    const chatButton = document.getElementById('chat-button');
    const summaryButton = document.getElementById('summary-button');
    const imageButton = document.getElementById('image-button');
    const webButton = document.getElementById('web-button');

    const chatSection = document.getElementById('chat-section');
    const summarySection = document.getElementById('summary-section');
    const imageSection = document.getElementById('image-section');
    const webSection = document.getElementById('web-section');

    chatButton.addEventListener('click', function () {
        chatSection.style.display = 'block';
        summarySection.style.display = 'none';
        imageSection.style.display = 'none';
        webSection.style.display = 'none';
    });

    summaryButton.addEventListener('click', function () {
        chatSection.style.display = 'none';
        summarySection.style.display = 'block';
        imageSection.style.display = 'none';
        webSection.style.display = 'none';
    });

    imageButton.addEventListener('click', function () {
        chatSection.style.display = 'none';
        summarySection.style.display = 'none';
        imageSection.style.display = 'block';
        webSection.style.display = 'none';
    });

    webButton.addEventListener('click', function () {
        chatSection.style.display = 'none';
        summarySection.style.display = 'none';
        imageSection.style.display = 'none';
        webSection.style.display = 'block';
    });

    // Rest of your code...



// function myFunction() {
//     var x = document.getElementById("chat-section");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
//   }

// chat section

    const questionInput = document.getElementById('question_chat');
    const submitButton = document.getElementById('submit_chat');
    const responseDiv = document.getElementById('response_chat');

    //loading
    const rotate = document.getElementById('chatbot-content');

    submitButton.addEventListener('click', async function () {

        responseDiv.innerText = "Your response will be shown here..."
        //loading activated
        rotate.classList.add("rainbow")

        const question = questionInput.value.trim();
                const apiUrl = 'https://mindflow-u5hy.onrender.com/chat'; // Change the API route as needed
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ question })
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data)
                    const markdownText = data.response;

                    console.log('Original Markdown:', markdownText)

                    const markedOptions ={
                        sanitize: false
                    }
                    const htmlText = marked(markdownText, markedOptions);

                    console.log('HTML Output:', htmlText);

                    
                    responseDiv.innerHTML= htmlText;
                    //loading remove
                    rotate.classList.remove("rainbow")

                    const copyButton = document.getElementById('chat-copyButton');

                    copyButton.addEventListener('click', function () {
                        // Select the response text
                        const responseText = responseDiv.innerText;
                        const tempTextArea = document.createElement('textarea');
                        tempTextArea.value = responseText;
                        document.body.appendChild(tempTextArea);
                        tempTextArea.select();
                        document.execCommand('copy');
                        document.body.removeChild(tempTextArea);
        
                        // Change button text to indicate successful copy
                        copyButton.innerText = "✅";
                        setTimeout(() => {
                            copyButton.innerText = '📋';
                        }, 1500); // Reset button text after 1.5 seconds
                    });
                } else {
                    responseDiv.textContent = 'Error: Unable to fetch response.';

        }
    });

    //context section

    const questionInput_2 = document.getElementById('question_data');
    const dataInput_2 = document.getElementById('data_data');
    const submitButton_2 = document.getElementById('submit_data');
    const responseDiv_2 = document.getElementById('response_data');

    submitButton_2.addEventListener('click', async function () {

        responseDiv_2.innerText = "Your data will be shown here..."
        //loading
        rotate.classList.add("rainbow")

        const question = questionInput_2.value;
        const context = (dataInput_2.value).replace(/\s+/g, '').trim();
        console.log(context)
        
        
        const apiUrl = 'https://mindflow-u5hy.onrender.com/context'; 
        const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ question, context })
                });

        if (response.ok) {
            const data = await response.json();
            const markdownText = data;
            console.log(data)

            console.log('Original Markdown:', markdownText)

            const markedOptions ={
                sanitize: false
            }
            const htmlText = marked(markdownText, markedOptions);

            console.log('HTML Output:', htmlText);
            responseDiv_2.innerHTML= htmlText;

            //loading remove
            rotate.classList.remove("rainbow")

            const copyButton = document.getElementById('summary-copyButton');

            copyButton.addEventListener('click', function () {
                // Select the response text
                const responseText = responseDiv_2.innerText;
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = responseText;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);

                // Change button text to indicate successful copy
                copyButton.innerText = "✅";
                setTimeout(() => {
                    copyButton.innerText = '📋';
                }, 1500); // Reset button text after 1.5 seconds
            });

        } else {
            responseDiv_2.textContent = 'Error: Unable to fetch response.';

        }
    });


    //Image Section

    const questionInput_3 = document.getElementById('question_image');
    // const dataInput_3 = document.getElementById('data_image');
    const submitButton_3 = document.getElementById('submit_image');
    const responseDiv_3 = document.getElementById('response_image');

    submitButton_3.addEventListener('click', async function () {

        responseDiv_3.innerText = "Copy the image url shown here..."
        //loading 
        rotate.classList.add("rainbow")

        const base = questionInput_3.value.trim();
        // const extra = " ";
        
        
        
        const apiUrl = 'https://mindflow-u5hy.onrender.com/image'; 
        const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ base })
                });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            
            // const markdownText = data;
            // console.log(data)

            // console.log('Original Markdown:', markdownText)

            // const markedOptions ={
            //     sanitize: false
            // }
            // const htmlText = marked(markdownText, markedOptions);

            // console.log('HTML Output:', htmlText);

            

            // const result = htmlText.match(/\<a\>.+\<\/a\>/)
            // console.log(result);
            var url = data;

            var input = document.createElement("input");
            input.type = "text";
            input.value = url;
            input.size = "30";
            input.style.textOverflow = "ellipsis";

            var container = document.getElementById("response_image");

            responseDiv_3.innerText = ""

            container.appendChild(input);

            const copyButton = document.getElementById('image-copyButton');

            copyButton.addEventListener('click', function () {
                // Select the response text
                const responseText = url;
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = responseText;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);

                // Change button text to indicate successful copy
                copyButton.innerText = "✅";
                setTimeout(() => {
                    copyButton.innerText = '📋';
                }, 1500); // Reset button text after 1.5 seconds
            });

            // var input = document.createElement("input");
            // input.type = "text";
            // input.value = url;
            // input.size = "30";
            // input.style.textOverflow = "ellipsis";
          
            // // Create a new button element
            // var button = document.createElement("button");
            // button.innerHTML = "Copy";
            // button.classList.add("submit")
            // button.onclick = function() {
            //   input.select();
            //   document.execCommand("copy");
            // };
          
            // // Append the input and button elements to the url-container div
            // var container = document.getElementById("response_image");

            // container.appendChild(input);
            // container.appendChild(button)


            rotate.classList.remove("rainbow")



            // container.appendChild(button)
            // responseDiv_3.innerHTML= htmlText;

            //loading remove
            
        } else {
            responseDiv_3.textContent = 'Error: Unable to fetch response.';

        }

    });

    //Web Section

    const questionInput_4 = document.getElementById('question_web');
    const dataInput_4 = document.getElementById('data_web');
    const submitButton_4 = document.getElementById('submit_web');
    const responseDiv_4 = document.getElementById('response_web');

    submitButton_4.addEventListener('click', async function () {

        responseDiv_4.innerText = "Your response will be shown here..."
        //loading
        rotate.classList.add("rainbow")

        const question = questionInput_4.value;
        const context = dataInput_4.value;
        console.log(context)
        
        
        const apiUrl = 'http://127.0.0.1:8000/web'; 
        const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ question, context })
                });

        if (response.ok) {
            const data = await response.json();
            const markdownText = data;
            console.log(data)

            console.log('Original Markdown:', markdownText)

            const markedOptions ={
                sanitize: false
            }
            const htmlText = marked(markdownText, markedOptions);

            console.log('HTML Output:', htmlText);
            responseDiv_4.innerHTML= htmlText;


            const copyButton = document.getElementById('web-copyButton');

            copyButton.addEventListener('click', function () {
                // Select the response text
                const responseText = responseDiv_4.innerText;
                const tempTextArea = document.createElement('textarea');
                tempTextArea.value = responseText;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand('copy');
                document.body.removeChild(tempTextArea);

                // Change button text to indicate successful copy
                copyButton.innerText = "✅";
                setTimeout(() => {
                    copyButton.innerText = '📋';
                }, 1500); // Reset button text after 1.5 seconds
            });

            
            //loading remove
            rotate.classList.remove("rainbow")

        } else {
            responseDiv_4.textContent = 'Error: Unable to fetch response.';

        }
    });

});












