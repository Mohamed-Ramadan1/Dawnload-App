const fileInput = document.querySelector("input"),
    downloadBtn = document.querySelector("button");


downloadBtn.addEventListener("click", e => {
    e.preventDefault();
    downloadBtn.innerText = "Downloading .....";
    fetchFile(fileInput.value);
})


function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = "fileName";
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Downloading File";
    });
    
}