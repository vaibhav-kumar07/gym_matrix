import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { MemberUpcomingClass } from "@/lib/dashboard";

interface MemberDesktopUpcomingClassesProps {
  classes: MemberUpcomingClass[];
}

export function MemberDesktopUpcomingClasses({
  classes,
}: MemberDesktopUpcomingClassesProps) {
  return (
    <Card className="p-6 border rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Upcoming Classes</h2>
      <ScrollArea className="h-64">
        <div className="space-y-2 no-scrollbar">
          {classes.map((class_) => (
            <div key={class_.id} className="p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{class_.name}</h3>
                <span className="text-sm text-gray-500">{class_.time}</span>
              </div>
              <p className="text-sm text-gray-600">with {class_.trainer}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
