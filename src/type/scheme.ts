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
