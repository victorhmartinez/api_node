const swaggerJsdoc = require("swagger-jsdoc");

/**
 * API config info
 */
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Documentacion API curso de Node ",
        version: "1.0.1"
    },
    servers: [
        {
            url: "http://localhost:3002/api"

        },

    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            }
        },
        schemas: {
            authLogin: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                },
            },
            authRegister: {
                type: "object",
                required: ["email", "password", "age", "name"],
                properties: {
                    name: {
                        type: "string",
                    },
                    age: {
                        type: "integer",
                    },
                    email: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                },
            },
            track: {
                type: "object",
                required: ["name", "album", "cover", "artist", "duration", "mediaId"],
                properties: {
                    name: {
                        type: "string"
                    },
                    album: {
                        type: "string"
                    },
                    cover: {
                        type: "string"
                    },
                    artist: {
                        type: "object",
                        required: ["name", "nickname", "nationality"],
                        properties: {
                            name: {
                                type: "string"
                            },
                            nickname: {
                                type: "string"
                            },
                            nationality: {
                                type: "string"
                            },
                        }
                    },
                    duration: {
                        type: "object",
                        required: ["start", "end"],
                        properties: {
                            start: {
                                type: "integer"
                            },
                            end: {
                                type: "integer"
                            },

                        }
                    },
                    mediaId: {
                        type: "string"
                    }
                }
            },
            storage: {
                type: "object",
                required: ["url", "filename"],
                properties: {
                    url: {
                        type: "string"
                    },
                    filename: {
                        type: "string"
                    },


                }
            },

        }
    }
}
/**
 * Opciones
 */
const options = {
    swaggerDefinition,
    apis: [
        "./routes/*.js"
    ]
}
const operApiConfiguration = swaggerJsdoc(options)
module.exports = operApiConfiguration;