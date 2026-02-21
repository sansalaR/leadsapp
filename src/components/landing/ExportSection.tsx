"use client";

import { Download, FileSpreadsheet, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

const csvData = [
  { name: "Sarah Chen", company: "TechCorp Inc.", email: "sarah.chen@techcorp.com", phone: "+1 (415) 555-0142", skills: "SaaS Sales, Enterprise" },
  { name: "Michael Roberts", company: "ScaleUp Inc.", email: "m.roberts@scaleup.io", phone: "+1 (212) 555-0118", skills: "Growth, Analytics" },
  { name: "Emma Thompson", company: "CloudBase", email: "emma.t@cloudbase.com", phone: "+1 (512) 555-0155", skills: "Business Dev, Partnerships" },
  { name: "David Kim", company: "DataFlow", email: "d.kim@dataflow.co", phone: "+1 (206) 555-0173", skills: "Revenue Ops, CRO" },
  { name: "Lisa Anderson", company: "Nexus AI", email: "l.anderson@nexusai.com", phone: "+1 (617) 555-0191", skills: "Sales Strategy, Team Lead" },
];

const benefits = [
  "50 free exports daily",
  "Excel & CSV formats",
  "All contact data included",
  "CRM-ready format",
];

export const ExportSection = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div>

             <h2 className="text-4xl sm:text-5xl font-normal text-gray-900 mb-4">
                Export leads in one click
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                Download verified leads as CSV or sync directly to your CRM.
                All contact data included — no hidden fields or extra charges.
              </p>

              <ul className="space-y-3 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Try Free Export
              </Button>
            </div>

            {/* CSV Preview */}
            <Card className="shadow-xl overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between px-4 py-3 bg-muted/50 border-b">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">
                    leads_export.csv
                  </span>
                </div>

                <Button size="sm" variant="outline" className="gap-2">
                  <Download className="w-3.5 h-3.5" />
                  Download
                </Button>
              </CardHeader>

              <CardContent className="p-0 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/30 text-xs">
                      <TableHead className="border-r">A</TableHead>
                      <TableHead className="border-r">B</TableHead>
                      <TableHead className="border-r">C</TableHead>
                      <TableHead className="border-r">D</TableHead>
                      <TableHead>E</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    <TableRow className="bg-primary/5 font-medium">
                      <TableCell className="border-r">Name</TableCell>
                      <TableCell className="border-r">Company</TableCell>
                      <TableCell className="border-r">Email</TableCell>
                      <TableCell className="border-r">Phone</TableCell>
                      <TableCell>Skills</TableCell>
                    </TableRow>

                    {csvData.map((row, index) => (
                      <TableRow
                        key={row.name}
                        className={index % 2 === 0 ? "bg-background" : "bg-muted/10"}
                      >
                        <TableCell className="border-r whitespace-nowrap">
                          {row.name}
                        </TableCell>
                        <TableCell className="border-r whitespace-nowrap">
                          {row.company}
                        </TableCell>
                        <TableCell className="border-r text-primary whitespace-nowrap">
                          {row.email}
                        </TableCell>
                        <TableCell className="border-r font-mono text-xs whitespace-nowrap">
                          {row.phone}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {row.skills}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>

              <CardFooter className="px-4 py-2 bg-muted/30 text-xs text-muted-foreground">
                5 leads • All fields verified • Ready for import
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
