import { z } from "zod";

const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional(),
  isDraft: z.boolean().optional(),
  toc: z.boolean().optional(),
  pubDate: z.coerce.date().optional(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.tuple([z.string(), z.string()]).optional(), // [image, alt]
  heroImageCredit: z
    .tuple([z.string(), z.union([z.literal(""), z.string().trim().url()])])
    .optional(), // [credit name, credit link OR ""]
  seriesName: z.string().optional(),
  seriesSlug: z.string().optional(),
  seriesInfo: z
    .tuple([z.string(), z.string()]) // [series name, series slug]
    .optional(),
  repo: z.string().optional(),
  shareLinks: z
    .tuple([
      z.string().includes("bsky.app").url(),
      z.string().includes("threads.net").url(),
    ])
    .optional(),
});

type PostTemplateInput = z.infer<typeof postSchema>;

export const generatePost = ({
  title,
  pubDate = new Date(),
  isDraft = true,
}: PostTemplateInput) => `
---
title: ${title}
pubDate: ${pubDate.toISOString()}
isDraft: ${isDraft}
---

# ${title}
`;
