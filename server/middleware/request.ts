import { convertQueryStringToObject, throwIf } from "../helpers";

export default defineEventHandler((request) => {

    const contentType = request.headers.get('Accept');

    throwIf(
        !contentType?.includes('application/json'),
        'Bad Request: JSON data is required', 400
    );

    request.context.hasQueryString = () => {
        if (request.path.includes('?')) {
            convertQueryStringToObject(request);
            return true;
        }

        return false;
    }

})
