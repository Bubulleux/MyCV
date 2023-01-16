function setAge() {
    const ageSpan = document.getElementById("age-span")
    if (ageSpan == null) { return }
    let dateDiff = new Date(Date.now() - Date.parse(ageSpan.innerHTML))
    let result = Math.abs(dateDiff.getUTCFullYear() - 1970)
    ageSpan.innerHTML = result
}

setAge()


