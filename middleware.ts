import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import isAuthenticated from './app/lib/actions'

export const config = {
    matcher: ['/dashboard/:path*', '/api/:path([^nextauth].*)'],
}

export async function middleware(req: NextRequest) {
    const isAuth = await isAuthenticated(req.cookies)
    if (!isAuth.authenticated) {
        const absoluteURL = new URL('/', req.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString())
    }

    return NextResponse.next()
}
// export const config = {
//     matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };