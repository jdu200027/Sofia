// Создаем распознаватель
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognizer = new SpeechRecognition();

// Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
recognizer.interimResults = true;

// Какой язык будем распознавать?
recognizer.lang = 'en-En';

// Используем колбек для обработки результатов
// Add result event listener to restart recognition when the current result is finished
recognizer.addEventListener('result', function(event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
        // alert('Вы сказали: ' + result[0].transcript);
        const valueResult = result[0].transcript;
        console.log(valueResult);
        if(["Sophia", "sophia"].includes(valueResult)){
            call();
        };
        if (["Open YouTube", "open YouTube"].includes(valueResult)) {
            correctOption();
            location.href = "https://www.youtube.com/";
        };
        if (["Open Google", "open Google"].includes(valueResult)) {
            correctOption();
            location.href = "https://www.google.com/webhp?hl=ru&sa=X&ved=0ahUKEwjE47jqk7T-AhX_AxAIHXRbDeEQPAgI";
        };
        if (["Open my assistant", "open my assistant"].includes(valueResult)) {
            correctOption();
            localStorage.href = "https://openai.com/blog/chatgpt";
            console.log(true);
        };
        if (["Open translate", "open translate"].includes(valueResult)) {
            correctOption();
            location.href = "https://translate.google.com/?hl=ru";
        };
        if (["Open Japan University", "open japan university"].includes(valueResult)) {
            correctOption();
            location = "https://elcampus.otemae.ac.jp/";
        };
    } else {
        console.log('Промежуточный результат: ', result[0].transcript);
    };
});

// Restart recognition
recognizer.addEventListener('end', ()=> {
    recognizer.start();
});

// Начинаем слушать микрофон и распознавать голос
recognizer.start();
//end


const textarea = document.getElementById('textarea');

textarea.addEventListener('keydown', (event)=>{
    const e = event.key;
    const text = [];
    text.push(e);
    console.log(text);
    if(e == 'assistant'){
        console.log('Hello World!');
        // location.href = 'https://openai.com/blog/chatgpt';
    };
})


// voices
function call(){
    let showContent = ["Я слушаю вас господин, чего пожелаете?", "Да сэр, чего желаете?", "Слушаю вас..."];
    const randomIndex = Math.floor(Math.random() * showContent.length);
    const utterance = new SpeechSynthesisUtterance(showContent[randomIndex]);
    utterance.pitch = 0.8;
    speechSynthesis.speak(utterance);
};

function correctOption() {
    let showContent = "Выполняю...";
    const utterance = new SpeechSynthesisUtterance(showContent);
    utterance.pitch = 0.8;
    speechSynthesis.speak(utterance);
};








// const letters = [];

// window.addEventListener('keydown', (event) => {
//     if (/[a-zA-Z]/.test(event.key)) {
//         const pushMassage = letters.push(event.key.toLowerCase());
//         console.log(letters.join(''));
//         if (pushMassage == "rasul") {
//             call();
//         }
//     }
// });



