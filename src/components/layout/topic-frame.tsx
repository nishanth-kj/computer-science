"use client";

import { useState, type ReactNode } from "react";
import { List } from "lucide-react";
import { DocsSidebar } from "@/components/topics/sidebar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function TopicFrame({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] max-w-[88rem]">
      <aside className="hidden w-72 shrink-0 overflow-hidden border-r border-border lg:block">
        <div className="sticky top-14 h-[calc(100dvh-3.5rem)] overflow-hidden">
          <DocsSidebar />
        </div>
      </aside>
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon-sm" variant="outline" className="fixed bottom-4 left-4 z-30" aria-label="Topics">
              <List className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 p-0">
            <SheetTitle className="sr-only">Topics</SheetTitle>
            <div className="flex min-h-0 flex-1 flex-col">
              <DocsSidebar onNavigate={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
