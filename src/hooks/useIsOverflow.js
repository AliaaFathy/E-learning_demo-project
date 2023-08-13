import * as React from 'react';

export const useIsOverflow = (ref, callback) => {
    const [isOverflow, setIsOverflow] = React.useState(undefined);

    React.useLayoutEffect(() => {
        const { current } = ref;

        const trigger = () => {
            const hasOverflow = current.offsetWidth < current.scrollWidth ||current.offsetHeight< current.scrollHeight;

            setIsOverflow(hasOverflow);

            if (callback) callback(hasOverflow);
        };

        if (current) {
            trigger();
        }
    }, [callback, ref]);

    return isOverflow;
};