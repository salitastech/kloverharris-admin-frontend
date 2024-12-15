import { NextResponse } from 'next/server';

type Res = {
  data?: Record<any, any>;
  status: 'Success';
  message: 'Company clients retrieved successfully';
};

type ReqMethod = 'POST' | 'GET' | 'PUT' | 'PATCH';

const BASE_URL = String(process.env.API_BASE_URL!);

const requestHandler = async (
  method: ReqMethod,
  path: string,
  body?: Record<any, any>
) => {
  try {
    const headers = {};
    const response = await fetch(BASE_URL.concat('/', path), {
      method,
    //   body: body || {},
      headers,
    });
    return response.json();
  } catch (error) {
    console.dir({ message: 'API Error', error }, { depth: Infinity });
    throw error;
  }
};

export async function POST(req: Request, { params }: { params: any }) {
  const path = req.url;
  console.log({ path });
  try {
    const res = await requestHandler('POST', path, params);
    return NextResponse.json(res, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
