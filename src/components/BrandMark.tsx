import { Link } from "@tanstack/react-router";
import { Plane } from "lucide-react";

export function BrandMark() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-primary shadow-glow">
        <Plane className="size-4 -rotate-45 text-primary-foreground" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold tracking-tight text-foreground">
        Flight Price Notifier
      </span>
    </Link>
  );
}
