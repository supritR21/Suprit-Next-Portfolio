export async function GET() {
  try {
    const res = await fetch("https://www.codechef.com/users/suprit_r21", {
      headers: {
        // Mimic a real browser so CodeChef doesn't block the request
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        "Accept":
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Referer": "https://www.codechef.com/",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return Response.json({ rating: "N/A" });
    }

    const html = await res.text();

    // CodeChef embeds the rating in a <div class="rating-number">XXXX</div>
    const match = html.match(/class="rating-number"[^>]*>\s*(\d+)\s*</);
    if (match?.[1]) {
      return Response.json({ rating: match[1] });
    }

    // Fallback: look for the JSON-LD or any standalone 4-digit rating near "Rating"
    const fallback = html.match(/["']currentRating["']\s*:\s*(\d+)/);
    if (fallback?.[1]) {
      return Response.json({ rating: fallback[1] });
    }

    return Response.json({ rating: "N/A" });
  } catch (err) {
    console.error("CodeChef fetch error:", err);
    return Response.json({ rating: "N/A" });
  }
}