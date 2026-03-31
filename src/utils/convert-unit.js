export function convertUnits() {
    function extractNumber(text) {
        const match = text.match(/-?\d+(\.\d+)?/);
        return match ? parseFloat(match[0]) : 0;
    }

    function FToC(contentOfTemp) {
        const num = extractNumber(contentOfTemp.textContent);
        const changedValue = ((num - 32) * (5/9)).toFixed(1);
        const valueWithUnit = `<button><i id="change-button" class="fa fa-refresh" aria-hidden="true"></i></button> Temperatur: ${changedValue} °C`;
        contentOfTemp.innerHTML = valueWithUnit;
    }

    function CToF(contentOfTemp) {
        const num = extractNumber(contentOfTemp.textContent);
        const changedValue = (num * (9/5) + 32).toFixed(1);
        const valueWithUnit = `<button><i id="change-button" class="fa fa-refresh" aria-hidden="true"></i></button> Temperatur: ${changedValue} °F`;
        contentOfTemp.innerHTML = valueWithUnit;
    }

    function FToCSimple(contentOfTemp) {
        const num = extractNumber(contentOfTemp.textContent);
        const changedValue = ((num - 32) * (5/9)).toFixed(1);
        contentOfTemp.textContent = `${changedValue} °C`;
    }

    function CToFSimple(contentOfTemp) {
        const num = extractNumber(contentOfTemp.textContent);
        const changedValue = (num * (9/5) + 32).toFixed(1);
        contentOfTemp.textContent = `${changedValue} °F`;
    }

    return {
        FToC,
        CToF,
        FToCSimple,
        CToFSimple
    }
}