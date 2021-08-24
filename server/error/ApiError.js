class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static badrequest(message) {
        return new ApiError(404, message)
    }

    static internal(mefssage) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }
}

exports.module = ApiError;