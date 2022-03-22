'USE STRICT';

// LOAODER UI CONTROLLER
const LOADER_UI_CONTROLLER = (function () {
    const DOMstrings = {
        loader: '#loading'
    };

    return {
        // showing loading
        displayLoading: () => {
            document
            .querySelector(DOMstrings.loader)
            .classList
            .add("display");
        },

        // hiding loading 
        hideLoading: () => {
            document
            .querySelector(DOMstrings.loader)
            .classList
            .remove("display");
        }
    }
})();