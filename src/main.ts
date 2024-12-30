#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs-extra";
import { createSlug } from "./lib/createSlug";
import { generatePost } from "./templates/post";

const program = new Command();

program
  .version("1.0.0")
  .description("Gin generator")
  .command("post", { isDefault: true })
  .argument("<title>", "post title")
  .action((title: string) => {
    const slug = createSlug(title);
    const post = generatePost({ title, slug });
    const path = `./src/content/blog/${slug}`;

    fs.mkdirSync(path);

    fs.writeFileSync(`${path}/index.mdx`, post);
    console.log("New post: ", `${path}/index.mdx`);
  });

program.parse(process.argv);
