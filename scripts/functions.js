/** 
    The clock updates to show the website is working (visual feedback)
    The status also helps students and parents make a decision to contact A+ at their own convenience.
**/

function showCurrentTime() {
    let display = document.getElementById("display")

    setInterval(() => {
        const time = new Date()
        const day = time.getDay()
        const hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()

        const hourInput = () => {
            if (hours > 12 ){
                const newHour = hours - 12
                return newHour
            } else if (hours === 24 || hours === 0){
                const newHour = 12
                return newHour
            }
            return hours
        }
        const hourOutput = hourInput().toString()

        const dateSet = {
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
            0: "Sunday"
        }

        const light = (hours > 12 && hours < 24) ? "PM" : "AM"

        const available = ((hours >= 11 && hours < 18) && (day > 0 && day < 7)) ? "Open" : "Closed"

        display.innerText = `
            Today is ${dateSet[day]}\n
            We are ${available}\n
            The current time is ${hourOutput}h:${minutes}m:${seconds}s ${light} EST
            `
        }, 1000)
}

// alerts successfully sent form, for simulation purposes as if form was sent, only works when all required form elements are filled
function showFormSubmit() {
    alert('form sent! (simulation only)')
}