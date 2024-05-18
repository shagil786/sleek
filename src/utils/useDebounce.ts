type DebouncedFunction<F extends (...args: any[]) => any> = (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
) => void;

export function debounce<F extends (...args: any[]) => any>(func: F, delay: number): DebouncedFunction<F> {
    let timeoutId: ReturnType<typeof setTimeout>

    return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
        const context = this;
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay)
    }
}