export const id = {
    GOOGLE: "google",
    FACEBOOK: "facebook",
    MICROSOFT: "microsoft",
    GITHUB: "github",
    LINKEDIN: "linkedin"
} as const;

export type SocialProviderId = typeof id[keyof typeof id];

export interface SocialProvider {
    id: SocialProviderId;
    label: string;
    icon: string;
}

export const socialProviders: SocialProvider[] = [
    {
        id: id.GOOGLE,
        label: "Continue with Google",
        icon: "logos:google-icon",
    },
    {
        id: id.FACEBOOK,
        label: "Continue with Facebook",
        icon: "logos:facebook",
    },
    {
        id: id.MICROSOFT,
        label: "Continue with Microsoft",
        icon: "logos:microsoft-icon",
    },
    {
        id: id.GITHUB,
        label: "Continue with Github",
        icon: "mdi:github",
    },
    {
        id: id.LINKEDIN,
        label: "Continue with LinkedIn",
        icon: "logos:linkedin-icon",
    },
];