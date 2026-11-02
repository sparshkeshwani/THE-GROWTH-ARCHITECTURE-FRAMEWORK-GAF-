"""
The Growth Architecture Framework (GAF) - Python Integration
Created & Architected by Sparsh Keshwani

This script demonstrates loading GAF as a system prompt to execute
marketing directives deterministically via the Google GenAI SDK.
"""

import os
from pathlib import Path
from google import genai
from google.genai import types

def run_gaf_directive(
    product_name: str,
    icp: str,
    kpi: str,
    module_directive: str,
    model_name: str = "gemini-2.5-flash"
):
    # 1. Load the GAF Core framework
    gaf_path = Path(__file__).parent.parent / "assets" / "gaf-core.md"
    if not gaf_path.exists():
        # Fallback if run from different working directory
        gaf_path = Path("assets/gaf-core.md")
    
    gaf_core = gaf_path.read_text(encoding="utf-8")

    # 2. Initialize Gemini Client
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("Please set your GEMINI_API_KEY environment variable.")
    
    client = genai.Client(api_key=api_key)

    # 3. Construct contextual prompt
    user_prompt = f"""
    [SYSTEM CONTEXT & VARIABLES]
    Product/Service Name: {product_name}
    Target Audience/ICP: {icp}
    Primary Goal/KPI: {kpi}
    Brand Tone & Voice: Authoritative, crisp, analytical, and high-impact
    Key Channels: Organic Search, GEO, LinkedIn, Email, Product In-App

    [EXECUTION DIRECTIVE]
    {module_directive}
    """

    print(f"🚀 Executing GAF Directive using {model_name}...")
    response = client.models.generate_content(
        model=model_name,
        config=types.GenerateContentConfig(
            system_instruction=gaf_core,
            temperature=0.2, # Low temperature ensures disciplined, analytical outputs
        ),
        contents=user_prompt
    )

    print("\n--- GAF GENERATED ASSET ---\n")
    print(response.text)
    return response.text

if __name__ == "__main__":
    run_gaf_directive(
        product_name="NexusPulse AI",
        icp="B2B Enterprise CTOs and Heads of Data Engineering (Series B-D SaaS)",
        kpi="Increase demo request conversion rate by 35% and decrease CAC by 20%",
        module_directive="[TASK DIRECTIVE]: Execute Module 1.4 (Pricing Architecture & Packaging Design). Structure tier packaging, value-metrics, and feature-gating thresholds for SaaS growth."
    )
