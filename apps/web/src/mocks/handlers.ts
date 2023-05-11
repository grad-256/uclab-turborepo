import { rest, createResponseComposition, context } from "msw"

import { db, persistDb } from "@/mocks/db"

export const delayedResponse = createResponseComposition(undefined, [context.delay(1000)])

export const handlers = [
  rest.get("/api/me", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        name: "name",
        email: "email",
        description: "description",
      }),
    )
  }),
  rest.get("/api/users", async (req, res, ctx) => {
    // const data = await req.json()
    const result = db.user.getAll()
    return res(ctx.status(200), ctx.json(result))
  }),
  rest.post("/api/users", async (req, res, ctx) => {
    const data = await req.json()
    const id = db.user.count() + 1
    const result = db.user.create({
      ...data,
      id,
    })

    // データを追加したので保存（PATCHやDELETEも同様）
    persistDb("user")

    return delayedResponse(ctx.status(200), ctx.json([]))
  }),
]
