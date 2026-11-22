// Sanity Studio is built as static files into public/studio (see "build:studio"),
// which keeps it out of the Worker bundle. Real files (index.html, /studio/static/*)
// are served directly as assets; any other /studio/... link (a page refresh inside
// the Studio) lands here and gets the Studio's index.html so it can route client-side.
export async function GET(request: Request) {
  const res = await fetch(new URL("/studio/index.html", request.url));
  return new Response(res.body, {
    status: res.status,
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" },
  });
}
