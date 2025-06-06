<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content=
        "width=device-width, initial-scale=1.0">
    <title>Text to Voice Converter</title>
    <style>

body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.container {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(90deg, #161578, #b81055);
}

.app-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
}

.headings-container {
    padding: 0 1rem;
}

.interaction-container {
    display: flex;
    align-items: normal;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 0 1rem;
}

.text-control {
    padding: 0.5rem;
    margin: 2rem 0;
    background-color: #3f464a52;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 10px;
}

.text-control:focus-visible {
    outline: none;
}

.error-para {
    color: red;
}

.btn {
    padding: 0.8rem;
    background-image: linear-gradient(90deg, #F4244C, #F57D4E);
    border: 1px solid transparent;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: all 0.25s;
}

.btn:hover {
    padding: 1rem;
}
    </style>
</head>

<body>
    <div class="container">
        <div class="app-container">
            <div class="headings-container">
                <h1>Text to Speech Converter</h1>
                <h3>Enter Text and Convert into Speech</h3>
            </div>

            <div class="interaction-container">
                <textarea id="textToConvert" 
                    placeholder="Enter text to convert into speech..." 
                    id="" cols="35" rows="10" 
                    class="text-control"></textarea>

                <p class="error-para"></p>

                <button class="btn" id="convertBtn">
                    Play Converted Sound
                </button>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>