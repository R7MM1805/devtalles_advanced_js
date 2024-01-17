/**
 * 
 * @param {HTMLDivElement} element 
 */
export const enviromentComponents = (element) => {
    console.log(import.meta.env);
    const html = `
        <strong>ApiKey:</strong> ${import.meta.env.VITE_API_KEY}
        <br>
        <strong>BaseURL:</strong> ${import.meta.env.VITE_BASE_URL}
        <br>
        <strong>Enviroment:</strong> ${import.meta.env.MODE}
    `;
    element.innerHTML = html;
};