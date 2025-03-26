import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";

import "dotenv/config";

export const arcjetMiddleware = arcjet({
    key: process.env.ARCJET_API_KEY,
    characteristics: ["ip.src,"],
    rules: [
        shield({mode:"LIVE"}),
        detectBot({
            mode: "LIVE",

            allow: [
                "CATEGORY:SEARCH-ENGINE"
            ]
        }),

        tokenBucket({
            mode: "LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        })
    ]
})