interface IPalette {
    primary: {
        main: string;
        light: string;
        dark: string;
    };
    secondary: {
        main: string;
        light: string;
        dark: string;
    };
    error: {
        main: string;
        light: string;
        dark: string;
    };
    warning: {
        main: string;
        light: string;
        dark: string;
    };
    info: {
        main: string;
        light: string;
        dark: string;
    };
    success: {
        main: string;
        light: string;
        dark: string;
    };
}

export type colorType =
    | "빨강색"
    | "주황색"
    | "노랑색"
    | "연두색"
    | "청록색"
    | "파랑색"
    | "남색"
    | "보라색"
    | "분홍색"
    | "무채색";

export type wordType =
    | "귀여운"
    | "경쾌한"
    | "다이나믹한"
    | "모던한"
    | "화려한"
    | "점잖은"
    | "고상한"
    | "우아한"
    | "은은한"
    | "내추럴한"
    | "맑은";

export type menuType = "색상 팔레트" | "Material UI Theme" | "데모 페이지";
