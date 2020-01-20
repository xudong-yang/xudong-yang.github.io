function handleExternalLinks() {
    var allATags = document.querySelectorAll("a")
    allATags.forEach( element => setExternalTargetToBlank(element) )
}

function setExternalTargetToBlank(element) {
    var regex = "^(.*:)//([A-Za-z0-9\-\.]+)(:[0-9]+)?(.*)$"
    var baseUri = element.href.match(regex)[2]
    var hostname = location.hostname
    if(baseUri != hostname) {
        element.target = '_blank' 
    }
}

handleExternalLinks()