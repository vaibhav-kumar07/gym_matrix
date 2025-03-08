import Button from "@/components/common/Button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTodaysClassStats } from "@/lib/stats";
import React from "react";

export default async function ClassTableSmallView() {
  const classSchedule = await getTodaysClassStats();

  return (
    <Card className="p-6 bg-white/90 backdrop-blur-md border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-xl overflow-hidden relative ">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-50/20 pointer-events-none"></div>

      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-900 font-semibold">Today&apos;s Classes</h3>
        <Button variant="outline" size="sm" className="!rounded-button">
          <i className="fas fa-plus mr-2"></i>
          Add Class
        </Button>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="whitespace-nowrap">Time</TableHead>
              <TableHead className="whitespace-nowrap">Class</TableHead>
              <TableHead className="whitespace-nowrap">Trainer</TableHead>
              <TableHead className="whitespace-nowrap">Participants</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classSchedule.map((cls, index) => (
              <TableRow key={index} className="hover:bg-gray-50">
                <TableCell className="font-medium">{cls.time}</TableCell>
                <TableCell>{cls.name}</TableCell>
                <TableCell>{cls.trainer}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{cls.participants} / 20</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
