import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const { productName, icp, goalKpi, brandTone, channels, directive, customNotes } = await req.json();

    if (!directive) {
      return NextResponse.json({ error: 'Directive is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'GEMINI_API_KEY is not configured in environment.' },
        { status: 500 }
      );
    }

    // Load GAF Core
    const gafPath = path.join(process.cwd(), 'assets', 'gaf-core.md');
    let gafCore = '';
    try {
      gafCore = fs.readFileSync(gafPath, 'utf-8');
    } catch {
      // Fallback
      gafCore = `You are an elite Chief Marketing Officer (CMO) and Growth Architect executing The Growth Architecture Framework (GAF) created by Sparsh Keshwani.`;
    }

    const ai = new GoogleGenAI({ apiKey });

    const contents = `
[SYSTEM CONTEXT & VARIABLES]
* Product/Service Name: ${productName || 'NexusPulse AI'}
* Target Audience/ICP: ${icp || 'B2B SaaS Growth Leads & Engineering Leaders'}
* Primary Goal/KPI: ${goalKpi || 'Accelerate SQL velocity and reduce CAC by 25%'}
* Brand Tone & Voice: ${brandTone || 'High-conviction, crisp, analytical, enterprise-grade'}
* Key Channels & Regions: ${channels || 'AI Answer Engines (GEO), LinkedIn, Automated Lifecycle Email, Product In-App'}
* Additional Guidance: ${customNotes || 'Adhere strictly to the 4-Step Universal Execution Workflow.'}

[TASK DIRECTIVE]
${directive}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: gafCore,
        temperature: 0.25,
      },
      contents: contents,
    });

    return NextResponse.json({
      text: response.text,
      modelUsed: 'gemini-2.5-flash',
      status: 'success',
    });
  } catch (error: any) {
    console.error('GAF Execution Error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to execute GAF directive via AI Studio.' },
      { status: 500 }
    );
  }
}
