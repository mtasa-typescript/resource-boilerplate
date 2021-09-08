/**
 * File with exported functions example
 * (Exported function will be forceful written to _G table)
 **/

export function firstLetterUpperCase(value: string): string {
    if (!value) {
        return value;
    }

    return value[0].toUpperCase() + value.slice(1);
}
