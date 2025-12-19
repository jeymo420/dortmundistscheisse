export function onRequest(context, next) {
    const url = new URL(context.request.url);
    const hostname = url.hostname;
    const parts = hostname.split(".");

    let subdomain = "";
    if (hostname !== "localhost" && !/^\d+\.\d+\.\d+\.\d+$/.test(hostname) && parts.length > 2) {
        subdomain = parts[0];
    }

    if (subdomain.toLowerCase().includes("bochum")) {
        subdomain = "dortmund";
    }

    context.locals.website = `${url.protocol}//${hostname}`;
    context.locals.target = subdomain;

    console.log(`Request for url: ${context.request.url}, subdomain: ${subdomain}`);
    console.log(`Set context.locals.website to: ${context.locals.website}`);
    console.log(`Set context.locals.target  to: ${context.locals.target}`);

    return next();
}
