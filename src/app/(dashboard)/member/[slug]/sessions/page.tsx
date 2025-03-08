import DesktopSessionPage from "@/components/session/member/DesktopSession";
import { DesktopFetchSessions } from "@/lib/session";
import { SessionFilter } from "@/lib/types/session";
import React from "react";

type SearchParams = {
  sessiontype?: SessionFilter;
};
export default async function page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const filter = (await searchParams).sessiontype ?? "all";
  const sessions = await DesktopFetchSessions(filter);

  return (
    <div>
      <DesktopSessionPage sessions={sessions} activeFilter={filter} />
    </div>
  );
}
