import { NextResponse } from 'next/server';
import { getMenus } from './menu-items';

// To handle a GET request to /api/menus
export async function GET(
  req: Request,
  { params }: { params: { locale: string } }
) {
  const menus = await getMenus(params?.locale ?? 'en-US');
  // Here you can place logic to deliver user's role specific menus
  return NextResponse.json(menus, { status: 200 });
}
