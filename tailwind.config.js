module.exports = {
    theme: {
        minWidth: {
            12: "3rem",
        },
        opacity: {
            0: "0",
            10: ".1",
            20: ".2",
            30: ".3",
            40: ".4",
            50: ".5",
            60: ".6",
            70: ".7",
            80: ".8",
            90: ".9",
            100: "1",
        },
        extend: {
            width: {
                "fit-content": "fit-content",
            },
        },
    },
    purge: ["./src/**/*.tsx"],
    plugins: [require("@tailwindcss/custom-forms")],
};
