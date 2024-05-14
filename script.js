document.addEventListener("DOMContentLoaded", function() {
    //nav
    const hamburger = document.querySelector('.hamburger')
    const closeIcon = document.querySelector('.close')
    const itemWrapper = document.querySelector('.item-wrapper')
    
    function toggleMenu() {
        if (itemWrapper.style.right === '0px' || itemWrapper.style.right === '') {
            itemWrapper.style.right = '-100%'
        } else {
            itemWrapper.style.right = '0'
        }
    }
    
    hamburger.addEventListener('click', toggleMenu)
    closeIcon.addEventListener('click', toggleMenu)

    //count down
    const countDownEl = document.querySelector(".count-down")
    const targetDate = new Date("2024-10-30T00:00:00")

    function countdown() {
        const now = new Date()
        const difference = targetDate - now

        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        countDownEl.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`

        if (difference < 0) {
            clearInterval(interval);
            countDownEl.innerHTML = "00 : 00 : 00 : 00"
        }
    }

    const interval = setInterval(countdown, 1000)

    //button group
    function handleSelection(choices, defaultChoiceVar) {
        let selectedChoice = choices[0].textContent;
        defaultChoiceVar = selectedChoice; 

        choices[0].classList.add('bg-gradient'); 

        choices.forEach(choice => {
            choice.addEventListener('click', () => {
                choices.forEach(c => c.classList.remove('bg-gradient'));
                
                choice.classList.add('bg-gradient');
                
                selectedChoice = choice.textContent; 
                console.log('Selected choice:', selectedChoice);
            });
        });

        return defaultChoiceVar;
    }

    // Handle the 'choice-techtalk-binusian' group
    const choicesTechtalkBinusian = document.querySelectorAll('.choice-techtalk-binusian');
    let selectedChoiceTechtalkBinusian = handleSelection(choicesTechtalkBinusian, 'Binusian');

    // Handle the 'choice-techtalk-place' group
    const choicesTechtalkPlace = document.querySelectorAll('.choice-techtalk-place');
    let selectedChoiceTechtalkPlace = handleSelection(choicesTechtalkPlace, 'Online');

});
