export const throwIf = (error: boolean, statusMessage: string, statusCode: number = 404) => {

    if (error) throw createError({ statusCode, statusMessage })
}

export const convertQueryStringToObject = (event: any) => {
    const url = new URL(process.env.BASE_URL + event.path)

    if (url.search) {
        const paramsObject: Record<string, string | number> = {};
        const params = new URLSearchParams(url.search);

        for (let [key, value] of params.entries()) {
            paramsObject[key] = /^\d+$/.test(value) ? parseInt(value, 10) : value;
        }

        event.context.query = paramsObject
    } else {
        event.context.query = null;
    }
}