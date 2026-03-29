import { NextRequest, NextResponse } from "next/server";

const MAPBOX_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places";

export async function GET(request: NextRequest) {
  if (!MAPBOX_TOKEN) {
    return NextResponse.json(
      { error: "MAPBOX_ACCESS_TOKEN not configured" },
      { status: 500 }
    );
  }

  const { searchParams } = request.nextUrl;
  const q = searchParams.get("q");
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  let url: string;

  if (q) {
    // Forward geocoding
    url = `${BASE_URL}/${encodeURIComponent(q)}.json?access_token=${MAPBOX_TOKEN}&limit=1`;
  } else if (lat && lng) {
    // Reverse geocoding
    url = `${BASE_URL}/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&limit=1&types=address,poi`;
  } else {
    return NextResponse.json(
      { error: "Provide either ?q=query or ?lat=...&lng=..." },
      { status: 400 }
    );
  }

  const res = await fetch(url);
  if (!res.ok) {
    return NextResponse.json(
      { error: "Mapbox API error" },
      { status: res.status }
    );
  }

  const data = await res.json();
  const feature = data.features?.[0];

  if (!feature) {
    return NextResponse.json(
      { error: "No results found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    place_name: feature.place_name,
    coordinates: feature.center as [number, number],
  });
}
