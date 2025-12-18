export function onRequest(context, next) {
    const hostname = context.url.hostname;
    const parts = hostname.split(".");

    let subdomain = "Dortmund";
    if (hostname !== "localhost" && !/^\d+\.\d+\.\d+\.\d+$/.test(hostname) && parts.length > 2) {
        subdomain = parts[0];
    }

    context.locals.website = context.url.origin;
    context.locals.target = subdomain;

    return next();
};
