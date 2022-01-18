const textArea: HTMLTextAreaElement = <HTMLTextAreaElement>document.getElementById('textarea');
const upperCase: HTMLButtonElement = <HTMLButtonElement>document.getElementById('upper-case');
const lowerCase: HTMLButtonElement = <HTMLButtonElement>document.getElementById('lower-case');
const properCase: HTMLButtonElement = <HTMLButtonElement>document.getElementById('proper-case');
const sentenceCase: HTMLButtonElement = <HTMLButtonElement>document.getElementById('sentence-case');
const saveTextFile: HTMLButtonElement = <HTMLButtonElement>document.getElementById('save-text-file');

upperCase.addEventListener('click', () => {
    textArea.value = textArea.value.toUpperCase();
});

lowerCase.addEventListener('click', () => {
    textArea.value = textArea.value.toLowerCase();
});

properCase.addEventListener('click', () => {
    let arr: Array<string> | string = textArea.value.toLowerCase().split(' ');
    for (let i = 0; i < arr.length; i++) {
        let part1 = arr[i].slice(0, 1).toUpperCase();
        let part2 = arr[i].slice(1);
        arr[i] = part1 + part2;
    }
    arr = arr.join(' ');
    textArea.value = arr;
});

sentenceCase.addEventListener('click', () => {
    let arr: Array<string> | string = textArea.value.toLowerCase().split('. ');
    for (let i = 0; i < arr.length; i++) {
        let part1 = arr[i].slice(0, 1).toUpperCase();
        let part2 = arr[i].slice(1);
        arr[i] = part1 + part2;
    }
    arr = arr.join('. ')
    textArea.value = arr;
});

saveTextFile.addEventListener('click', () => {
    download('text.txt', textArea.value);
});

function download(filename: string, text: string) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}