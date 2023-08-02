import classNames from "classnames";
import propTypes from 'prop-types';

function Button({children,type,rounded,outlined,primary,secondary,success,warning,danger,...rest}) {
    let classes = classNames(rest.className,'flex items-center px-5 py-1 border m-2 ml-10', {
        'bg-blue-700 border-blue-700 text-white': type === "primary",
        'bg-blue-400 border-blue-400 text-white': type === "secondary",
        "bg-green-500 border-green-700 text-white": type === "success",
        "bg-yellow-400 border-yellow-400 text-white": type === "warning",
        "bg-red-500 border-red-700 text-white": type === "danger",
        "rounded-full": rounded,
        "bg-white": outlined,
        'text-blue-600 ': outlined && type === "primary",
        'text-blue-400 ': outlined && type === "secondary",
        "text-green-600 ": outlined && type === "success",
        "text-yellow-500 ": outlined && type === "warning",
        "text-red-600 ": outlined && type === "danger",
    })
    return (
        <div>
            <button  {...rest} className={classes}>{children}</button>
        </div>
    )
}
Button.propTypes= {
    checkVariation: ({primary, secondary, success, warning, danger}) => {
        const counter = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)
        if (counter > 1) {
            return new Error("only one is allowed")
        }
    }
}

export default Button