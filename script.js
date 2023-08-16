document.addEventListener('DOMContentLoaded', function () {
    
    //To show only desired sections hide others

    const chatButton = document.getElementById('chat-button');
    const summaryButton = document.getElementById('summary-button');
    const imageButton = document.getElementById('image-button');

    const chatSection = document.getElementById('chat-section');
    const summarySection = document.getElementById('summary-section');
    const imageSection = document.getElementById('image-section');

    chatButton.addEventListener('click', function () {
        chatSection.style.display = 'block';
        summarySection.style.display = 'none';
        imageSection.style.display = 'none';
    });

    summaryButton.addEventListener('click', function () {
        chatSection.style.display = 'none';
        summarySection.style.display = 'block';
        imageSection.style.display = 'none';
    });

    imageButton.addEventListener('click', function () {
        chatSection.style.display = 'none';
        summarySection.style.display = 'none';
        imageSection.style.display = 'block';
    });




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
                const apiUrl = 'Your Server Link/chat'; // Change the API route as needed
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
        
        
        const apiUrl = 'Your Server Link/context'; 
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

        } else {
            responseDiv_2.textContent = 'Error: Unable to fetch response.';

        }
    });


    //Image Section

    const questionInput_3 = document.getElementById('question_image');
    const dataInput_3 = document.getElementById('data_image');
    const submitButton_3 = document.getElementById('submit_image');
    const responseDiv_3 = document.getElementById('response_image');

    submitButton_3.addEventListener('click', async function () {

        responseDiv_3.innerText = "Copy the image url shown here..."
        //loading 
        rotate.classList.add("rainbow")

        const base = questionInput_3.value.trim();
        const extra = dataInput_3.value.trim();
        
        
        
        const apiUrl = 'Your Server Link/image'; 
        const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ base, extra })
                });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            
            var url = data;

            var input = document.createElement("input");
            input.type = "text";
            input.value = url;
            input.size = "30";
            input.style.textOverflow = "ellipsis";
          
            // Create a new button element
            var button = document.createElement("button");
            button.innerHTML = "Copy";
            button.classList.add("submit")
            button.onclick = function() {
              input.select();
              document.execCommand("copy");
            };
          
            // Append the input and button elements to the url-container div
            var container = document.getElementById("response_image");

            container.appendChild(input);
            container.appendChild(button)

            rotate.classList.remove("rainbow")
            
        } else {
            responseDiv_3.textContent = 'Error: Unable to fetch response.';

        }
    });

});












