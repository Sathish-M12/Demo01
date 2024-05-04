

window.onload = () => {
    const imgURL = "https://www.bing.com/images/search?view=detailV2&ccid=YWD1p0rX&id=89E86FF27B1455B6464185779676CA5A8CC7141F&thid=OIP.YWD1p0rXyMKt4EH8DcigCwHaG1&mediaurl=https%3A%2F%2Fcdn5.vectorstock.com%2Fi%2F1000x1000%2F60%2F69%2Fsample-stamp-vector-16166069.jpg&exph=922&expw=1000&q=sample+stamp+image&simid=607986873878209090&form=IRPRST&ck=720D045F6E11104B6FF9F51A8FF31F03&selectedindex=1&itb=1&ajaxhist=0&ajaxserp=0&vt=0&sim=11"
    const root = document.getElementById('root')
    const times = +prompt("Enter a numeric value")
    for (let i = 0; i < times; i++) {
        const img = document.createElement("img")
        img.setAttribute("class", "image")
        img.setAttribute("src", imgURL)
        img.setAttribute("alt","Sample Image")
        root.appendChild(img)
    }
}