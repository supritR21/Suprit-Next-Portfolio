export async function GET() {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query: `query {
          userContestRanking(username: "Suprit_Raj") {
            rating
          }
        }`,
      }),
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    const rating = json?.data?.userContestRanking?.rating;
    return Response.json({ rating: rating ? Math.round(rating).toString() : "N/A" });
  } catch {
    return Response.json({ rating: "N/A" });
  }
}