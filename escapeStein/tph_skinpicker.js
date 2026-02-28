var _gmSkinURL = "";

function gmOpenSkinPicker() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/png,image/jpeg,image/webp";
    input.onchange = function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(ev) {
            _gmSkinURL = ev.target.result;
            try { localStorage.setItem("gmSkinURL", ev.target.result); } catch(err) {}
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

function gmGetSkinURL() {
    var u = _gmSkinURL;
    _gmSkinURL = "";
    return u;
}

function gmGetSavedSkin() {
    try { return localStorage.getItem("gmSkinURL") || ""; } catch(e) { return ""; }
}