import Express from "express";
import { Request, Response } from "express";
const app = Express();
const PORT = 3000;
const user = [
  { id: 1, name: "user 1" },
  { id: 2, name: "user 2" },
  { id: 3, name: "user 3" },
  { id: 4, name: "user 4" },
  { id: 5, name: "user 5" },
  { id: 6, name: "user 6" },
  { id: 7, name: "user 7" },
  { id: 8, name: "user 8" },
  { id: 9, name: "user 9" },
];

app.get("/users", (req: Request, res: Response) => {
  const page: any = req.query.page;
  const limit: any = req.query.limit;
  const startIndex = (page - 1) * limit;
  const endIndex: number = page * limit;
  const results = { page: page, limit: limit, results: {} };
  results.results = user.slice(startIndex, endIndex);

  res.json(results);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
