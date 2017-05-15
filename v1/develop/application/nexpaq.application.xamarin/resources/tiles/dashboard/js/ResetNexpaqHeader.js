function ResetNexpaqHeader() {
    // Back button
    NexpaqHeader.resetBackButtonIcon();
    NexpaqHeader.showBackButton();
    NexpaqHeader.Events.BackButtonClicked.callbacks = [];
    NexpaqHeader.addEventListener('BackButtonClicked', FW7BackButtonCallback);

    // Title
    NexpaqHeader.setTitle('');

    // Buttons
    NexpaqHeader.cleanButtons();

    // Appearance
    NexpaqHeader.showShadow();
}

function FW7BackButtonCallback() {
    // if there are custom callback then doing nothing
    if(NexpaqHeader.Events.BackButtonClicked.callbacks.length > 1) return;
    showPrevNexpaqPage();
}