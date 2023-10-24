// Aspect Ratio Calculator Script
// Constants
const resolutionInput = document.getElementById('resolution'); 
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');

// 
function calculateGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return calculateGCD(b, a % b);
}

// Calculate button
calculateButton.addEventListener('click', () => {
    const resolution = resolutionInput.value;
    if (resolution) {
        // Split resolution
        const [width, height] = resolution.split('x').map(Number);

        // Simplified AR
        const gcd = calculateGCD(width, height);

        // Calculate simplified AR
        const aspectRatio = `${width / gcd}:${height / gcd}`;

        // Fetch data 
        fetch('data.json')
            .then((response) => response.json())
            .then((data) => {
                const format = data.find((item) => item.Width === width && item.Height === height);
                if (format) {
                    resultElement.textContent = `Aspect Ratio: ${aspectRatio} (${width}x${height}) - ${format.Standard}`;
                } else {
                    resultElement.textContent = `Aspect Ratio: ${aspectRatio} (${width}x${height})`;
                }
            })
            .catch((error) => {
                console.error(error);
                resultElement.textContent = 'Error fetching data.';
            }); // Used a suggested error catching method
    } else {
        resultElement.textContent = 'Please enter a resolution.';
    }
});