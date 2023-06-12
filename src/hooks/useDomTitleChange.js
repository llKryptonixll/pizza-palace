import { useEffect } from "react";

function useDomTitleChange(value) {
    useEffect(() => {
        document.title = `Pizza Palace | ${value}`
    }, [value])
}

export default useDomTitleChange