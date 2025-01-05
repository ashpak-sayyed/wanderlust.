// create express class error handle manualy as we want

class expressError extends Error { 
    constructor(statusCode,message) { 
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = expressError;