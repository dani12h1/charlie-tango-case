export default async function handler(req, res) {
  //   res.status(200).json({ name: req.body });

  const response = await fetch(
    "https://hgumkzlqjshouqhpskwd.supabase.co/rest/v1/Dashboard_data",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.SUPABASE_KEY,
        Prefer: "return=representation",
      },
    }
  ).then((res) => res.json());
  console.log({ response });
  //   res.redirect(307, "/");
  res.status(200).json({ response });
}
