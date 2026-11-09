import { matchRoutes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { routes } from "@/routes";

// Match routes without running loaders or rendering: loaders may need the network the
// test run lacks, and jsdom never loads the stylesheets.
function lastMatch(path: string) {
  return matchRoutes(routes, path)?.at(-1)?.route;
}

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const route = lastMatch("/");
    expect(route?.id).toBe("index");
  });

  it("serves separate sign-in and sign-up pages", () => {
    expect(lastMatch("/auth")?.id).toBe("auth");
    expect(lastMatch("/signup")?.id).toBe("signup");
  });

  it("aliases /sign-in and /sign-up to the auth pages", () => {
    expect(lastMatch("/sign-in")?.id).toBe("sign-in-alias");
    expect(lastMatch("/sign-up")?.id).toBe("sign-up-alias");
  });

  it("puts the /app dashboard behind the signed-in gate", () => {
    const route = lastMatch("/app");
    expect(route?.id).toBe("app");
    expect(route?.loader).toBeTypeOf("function");
  });

  it("falls back to the not-found page for unknown paths", () => {
    expect(lastMatch("/nope")?.id).toBe("not-found");
  });
});
