import { useEffect, useRef, useState } from "react";

const useCloseOutside = <T extends HTMLElement>(initialState: boolean = false) => {
    const [isOpen, setIsOpen] = useState<boolean>(initialState);
    const ref = useRef<T | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key == 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        }
    }, []);

    return { ref, isOpen, setIsOpen };
}

export default useCloseOutside;