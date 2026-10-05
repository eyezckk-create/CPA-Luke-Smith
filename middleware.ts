import {NextRequest,NextResponse} from 'next/server'; import {verifySession} from './lib/auth';
export async function middleware(req:NextRequest){if(!req.nextUrl.pathname.startsWith('/dashboard'))return NextResponse.next();const token=req.cookies.get('campaign_session')?.value;if(token&&await verifySession(token))return NextResponse.next();return NextResponse.redirect(new URL('/admin/login',req.url))}
export const config={matcher:['/dashboard/:path*']};
