import { withValidManifest } from "@coinbase/onchainkit/minikit";
import { minikitConfig } from "../../../minikit.config";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  // 既存のメタデータ...
  other: {
    'base:app_id': '694253c2d19763ca26ddc386'
  }
}

export async function GET() {
  return Response.json(withValidManifest(minikitConfig));
}
