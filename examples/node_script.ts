/**
 * The Growth Architecture Framework (GAF) - Node.js / TypeScript Integration
 * Created & Architected by Sparsh Keshwani
 *
 * Demonstrates loading GAF as a system prompt to execute marketing directives.
 */

import * as fs from 'fs';
import * as path from 'path';
import { GoogleGenAI } from '@google/genai';

interface GafRunOptions {
  productName: string;
  icp: string;
  goalKpi: string;
  directive: string;
  model?: string;
}

export async function executeGafDirective(options: GafRunOptions) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is missing.');
  }

  // Load the GAF Core framework
  const gafPath = path.resolve(__dirname, '../assets/gaf-core.md');
  const gafCore = fs.readFileSync(gafPath, 'utf-8');

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
[SYSTEM CONTEXT & VARIABLES]
Product/Service Name: ${options.productName}
Target Audience/ICP: ${options.icp}
Primary Goal/KPI: ${options.goalKpi}
Brand Tone: Data-driven, high-converting, authoritative, clean
Channels: AI Answer Engines (GEO), LinkedIn, Automated Lifecycle

[EXECUTION DIRECTIVE]
${options.directive}
`;

  console.log(`⚡ Running GAF Directive with model ${options.model || 'gemini-2.5-flash'}...`);

  const response = await ai.models.generateContent({
    model: options.model || 'gemini-2.5-flash',
    contents: prompt,
    config: {
      systemInstruction: gafCore,
      temperature: 0.2,
    },
  });

  console.log('\n=== GAF OUTPUT ASSET ===\n');
  console.log(response.text);
  return response.text;
}

// Example local run
if (require.main === module) {
  executeGafDirective({
    productName: 'HyperScale Vector DB',
    icp: 'Machine Learning Engineers and AI Architects',
    goalKpi: 'Establish category dominance in AI search engines and answer engines (GEO)',
    directive: '[TASK DIRECTIVE]: Execute Module 3.3 (Generative Engine Optimization - GEO). Objective: Build a brand citation matrix and direct-answer content optimization plan for Perplexity and Gemini.',
  }).catch(console.error);
}
