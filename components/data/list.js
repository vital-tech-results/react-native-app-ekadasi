const list2020 = [

    {
        "monthId": "8",
        "monthName": "May",

        "firstEkadasi": {
            "jsDayOfWeek": "1",
            "dayOfWeek": "Monday",
            "dayInMonth": "15",
            "ekadasiName": "Mohini"
        },
        "secondEkadasi": {
            "jsDayOfWeek": "1",
            "dayOfWeek": "Monday",
            "dayInMonth": "18",
            "ekadasiName": "Apara"
        },
        "thirdEkadasi": {}

    },

    {
        "monthId": "5",
        "monthName": "June",
        "firstEkadasi": {
            "jsDayOfWeek": "2",
            "dayOfWeek": "Tuesday",
            "dayInMonth": "2",
            "ekadasiName": "Pandava Nirjala"
        },
        "secondEkadasi": {
            "jsDayOfWeek": "3",
            "dayOfWeek": "Wednesday",
            "dayInMonth": "17",
            "ekadasiName": "Yogini"
        },
        "thirdEkadasi": {}
    },


];



function mappingOver() {


    const month = new Date().getMonth();
    const dayOfMonth = new Date().getDate();
    const findNextMonth = data.thisYear2020.find((element) => {
        return element.monthId == month + 1
    })

    return month

}