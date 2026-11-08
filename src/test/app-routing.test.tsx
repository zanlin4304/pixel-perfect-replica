import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
function lastMatch(path: string) {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  return router.matchRoutes(path).at(-1)?.routeId;
}

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    expect(lastMatch("/")).not.toBe(rootRouteId);
  });

  it("serves separate sign-in and sign-up pages", () => {
    expect(lastMatch("/auth")).toBe("/auth");
    expect(lastMatch("/signup")).toBe("/signup");
  });

  it("puts the /app dashboard behind the signed-in gate", () => {
    expect(lastMatch("/app")).toBe("/_authenticated/app");
  });
});
