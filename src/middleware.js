export function onRequest(context, next) {
    const url = new URL(context.request.url);
    const hostname = url.hostname;
    const parts = hostname.split(".");

    let subdomain = "Dortmund";
    if (hostname !== "localhost" && !/^\d+\.\d+\.\d+\.\d+$/.test(hostname) && parts.length > 2) {
        subdomain = parts[0];
    }

    context.locals.website = `${url.protocol}//${hostname}`;
    context.locals.target = subdomain;

    return next();
}
