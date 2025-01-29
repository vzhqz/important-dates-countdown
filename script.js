const datesMenu = document.getElementById("datesMenu");
const daysText = document.querySelector("#days .number");
const hoursText = document.querySelector("#hours .number");
const minutesText = document.querySelector("#minutes .number");
const secondsText = document.querySelector("#seconds .number");
const countdownTitle = document.querySelector("h2 bdi");
const countdownDescription = document.querySelector("p bdi");

const dates = {
    israaAndMiraj: {
        date: "2025-01-26T00:00:00",
        title: "العد التنازلي لليله الإسراء والمعراج 2025",
        description: "تكون ليلة الاسراء والمعراج يوم السبت في تاريخ 26/01/2025 ميلادي"
    },
    ramadan: {
        date: "2025-03-01T04:44:00",
        title: "العد التنازلي لشهر رمضان 2025",
        description: "يكون اول ايام شهر رمضان 2025 يوم السبت تاريخ 01/03/2025 ميلادي."
    },
    springBreak: {
        date: "2025-03-20T00:00:00",
        title: "العد التنازلي لعطلة الربيع 2025",
        description: "تبدأ عطلة الربيع يوم الخميس في تاريخ 20/03/2025 ميلادي "
    },
    eidAlFitr: {
        date: "2025-03-30T00:00:00",
        title: "العد التنازلي لعيد الفطر 2025",
        description: "يوافق عيد الفطر يوم الاحد في تاريخ 30/03/2025 ميلادي"
    },
    workersDay: {
        date: "2025-05-01T00:00:00",
        title: "العد التنازلي ليوم العمال العالمي 2025",
        description: "يوافق يوم العمال العالمي يوم الخميس تاريخ 01/05/2025 ميلادي"
    },
    eidAlAdha: {
        date: "2025-06-06T00:00:00",
        title: "العد التنازلي لعيد الاضحى 2025",
        description: "يوافق عيد الاضحى يوم الجمعة تاريخ 06/06/2025 ميلادي"
    },
    summerBreak: {
        date: "2025-06-12T12:30:00",
        title: "العد التنازلي لعطلة الصيف 2025",
        description: "تبدأ عطلة الصيف يوم الخميس تاريخ 12/06/2025 ميلادي"
    },
    prophetsBirthday: {
        date: "2025-09-04T00:00:00",
        title: "العد التنازلي لعيد المولد النبوي 2025",
        description: "يوافق عيد المولد النبوي يوم الخميس تاريخ 04/09/2025 ميلادي"
    },
    winterBreak: {
        date: "2025-12-23T12:30:00",
        title: "العد التنازلي لعطلة الشتاء 2025",
        description: "تبدأ عطلة الشتاء يوم الثلاثاء تاريخ 23/12/2025 ميلادي"
    },
    newYear: {
        date: "2026-01-01T00:00:00",
        title: "العد التنازلي لعام 2026",
        description: "يبدأ العام القادم 2026 يوم الخميس"
    }
};

function updateCountDown() {
    const selectedDate = dates[datesMenu.value].date;
    const title = dates[datesMenu.value].title;
    const description = dates[datesMenu.value].description;

    const targetDate = new Date(selectedDate);
    const now = new Date();

    const timeDifference = targetDate - now;

    countdownTitle.textContent = title;
    countdownDescription.textContent = description;

    if(timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        daysText.textContent = days.toString().padStart(2, "0");
        hoursText.textContent = hours.toString().padStart(2, "0");
        minutesText.textContent = minutes.toString().padStart(2, "0");
        secondsText.textContent = seconds.toString().padStart(2, "0");
    }
    else {
        daysText.textContent = "00";
        hoursText.textContent = "00";
        minutesText.textContent = "00";
        secondsText.textContent = "00";
    }
}

setInterval(updateCountDown, 1000);
datesMenu.addEventListener("change", updateCountDown);

updateCountDown();