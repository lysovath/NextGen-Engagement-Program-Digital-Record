
export default function useScrollTo(){
    return function (id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView();
        }
    }
}