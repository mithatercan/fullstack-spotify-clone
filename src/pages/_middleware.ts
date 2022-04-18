import { NextResponse } from 'next/server';

const protectedPages = ['/', '/playlist', '/library'];

export default async function middleware(req) {
  const url = req.nextUrl;
  const pathname = url.pathname.split('/')[1];
  const found = protectedPages.find((page) => page === `/${pathname}`);
  const token = req.cookies.SPOTIFY_CLONE_ACCESS_TOKEN;

  if (found && !token) {
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }
}
