import React from "react";

const LoginButton= ({children}) => {
    <button className="loginButton w-[5.6rem] p-0 inline-flex items-center justify-center relative box-border bg-transparent m-0 outline-current border-0 border-current border-t-0 border-r-0 border-b-0 border-l-0 border-solid cursor-pointer select-none align-middle no-underline text-center overflow-visible text-opacity-50 transition-colors " tabindex="0" type="button" name="loginOrRegister" aria-label="Login / Register">
        {children}
    </button>
}

export default LoginButton;