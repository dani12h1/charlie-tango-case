export default async function handler(req, res) {
  //   res.status(200).json(req.body);

  const response = await fetch(
    `https://hgumkzlqjshouqhpskwd.supabase.co/rest/v1/Dashboard_data?id=eq.${req.body.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.SUPABASE_KEY,
        Prefer: "return=representation",
      },
      body: JSON.stringify(req.body),
    }
  ).then((res) => res.json());
  console.log({ response });
  //   res.redirect(307, "/");
  res.status(200).json({ response });
}
