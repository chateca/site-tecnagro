import { MiddlewareConfig, NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

const publicRoutes = [
  { path: '/', whenAuthenticated: 'next' },
  { path: '/login', whenAuthenticated: 'redirect' },
  { path: '/galeriaNoTerreno/todos', whenAuthenticated: 'next' },
  { path: '/galeriaNoTerreno/:d', whenAuthenticated: 'next' },
  { path: '/sobre', whenAuthenticated: 'next' },
  { path: '/solicitar-produto', whenAuthenticated: 'next' },
  { path: '/produtos-servicos/todos', whenAuthenticated: 'next' },
  { path: '/produtos-servicos/:id', whenAuthenticated: 'next' },
] as const;

const REDITECT_WHEN_NOT_AUTHENTICATE_ROUTE = '/login';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find(route =>
    route.path === path || (route.path.includes(":") && path.startsWith(route.path.split(":")[0]))
  );
  const authToken = request.cookies.get('sessionTecnagro');

  // Geração do nonce
  const nonce = crypto.randomBytes(16).toString("base64");

  // Criação da resposta
  let response = NextResponse.next();

  // Definição do CSP com nonce
  response.headers.set(
    "Content-Security-Policy",
    `default-src 'self'; script-src 'self' 'nonce-${nonce}' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self';`
  );

  // Adicionar nonce ao header (você pode ler esse valor no front-end)
  response.headers.set("x-nonce", nonce);

  if (!authToken && publicRoute) return response;

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDITECT_WHEN_NOT_AUTHENTICATE_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = '/adminPage';
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$).*)',
  ],
}