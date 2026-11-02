import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'assets', 'gaf-core.md');
    const content = fs.readFileSync(filePath, 'utf-8');
    return new NextResponse(content, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Content-Disposition': 'attachment; filename="gaf-core.md"',
      },
    });
  } catch {
    return new NextResponse('File not found', { status: 404 });
  }
}
