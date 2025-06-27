import { useEffect, useState, type ChangeEvent } from 'react';
import Papa from 'papaparse';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
  type LegendProps,
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ColumnStats {
  column: string;
  type: 'number' | 'string';
  count: number;
  mean?: number;
  min?: number;
  max?: number;
  uniqueValues?: number;
}

function analyzeData(rows: Record<string, string>[]): ColumnStats[] {
  if (rows.length === 0) return [];
  const headers = Object.keys(rows[0]);
  const stats: ColumnStats[] = [];
  for (const header of headers) {
    const values = rows.map((r) => r[header]);
    const nums = values.map((v) => Number(v));
    const numeric = nums.every((n) => !Number.isNaN(n));
    if (numeric) {
      const count = nums.length;
      const mean = nums.reduce((a, b) => a + b, 0) / count;
      const min = Math.min(...nums);
      const max = Math.max(...nums);
      stats.push({ column: header, type: 'number', count, mean, min, max });
    } else {
      const uniqueValues = new Set(values).size;
      stats.push({ column: header, type: 'string', count: values.length, uniqueValues });
    }
  }
  return stats;
}

function ScrollableLegend({ payload }: LegendProps) {
  if (!payload?.length) return null;
  return (
    <ul className="max-h-24 overflow-y-auto space-y-1">
      {payload.map((entry) => (
        <li key={entry.value} className="flex items-center gap-2 text-xs">
          <span
            className="block h-3 w-3 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CsvAnalyzer() {
  const [data, setData] = useState<Record<string, string>[]>([]);
  const [stats, setStats] = useState<ColumnStats[]>([]);
  const [selectedNumeric, setSelectedNumeric] = useState<string | null>(null);
  const [selectedCategorical, setSelectedCategorical] = useState<string | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const rows = results.data;
        setData(rows);
        setStats(analyzeData(rows));
      },
    });
  };

  const previewRows = data;
  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  const numericColumns = stats.filter((s) => s.type === 'number').map((s) => s.column);
  const categoricalColumns = stats.filter((s) => s.type === 'string').map((s) => s.column);

  useEffect(() => {
    if (!selectedNumeric && numericColumns.length > 0) {
      setSelectedNumeric(numericColumns[0]);
    }
    if (!selectedCategorical && categoricalColumns.length > 0) {
      setSelectedCategorical(categoricalColumns[0]);
    }
  }, [numericColumns, categoricalColumns, selectedNumeric, selectedCategorical]);

  const numericColumn = stats.find((s) => s.column === selectedNumeric);
  const categoricalColumn = stats.find((s) => s.column === selectedCategorical);

  const numericChartData = numericColumn
    ? data.map((row, idx) => ({
        index: idx + 1,
        value: Number(row[numericColumn.column]),
      }))
    : [];

  const categoricalChartData = categoricalColumn
    ? Array.from(
        data.reduce((map, row) => {
          const key = row[categoricalColumn.column];
          map.set(key, (map.get(key) || 0) + 1);
          return map;
        }, new Map<string, number>())
      ).map(([name, value]) => ({ name, value }))
    : [];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#888888'];

  return (
    <div className="space-y-6 p-4">
      <Card>
        <CardHeader>
          <CardTitle>CSV Analyzer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="file" accept=".csv" onChange={handleFileUpload} />

          {data.length > 0 && (
            <div className="space-y-4">
              <h2 className="font-semibold">Preview</h2>
              <ScrollArea className="max-h-64 w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      {headers.map((h) => (
                        <TableHead key={h}>{h}</TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {previewRows.map((row, i) => (
                      <TableRow key={i}>
                        {headers.map((h) => (
                          <TableCell key={h}>{row[h]}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>

              <h2 className="font-semibold">Analysis</h2>
              <ScrollArea className="max-h-64 w-full">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Column</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Count</TableHead>
                      <TableHead>Mean</TableHead>
                      <TableHead>Min</TableHead>
                      <TableHead>Max</TableHead>
                      <TableHead>Unique</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stats.map((s) => (
                      <TableRow key={s.column}>
                        <TableCell>{s.column}</TableCell>
                        <TableCell>{s.type}</TableCell>
                        <TableCell>{s.count}</TableCell>
                        <TableCell>{s.mean?.toFixed(2) ?? '-'}</TableCell>
                        <TableCell>{s.min ?? '-'}</TableCell>
                        <TableCell>{s.max ?? '-'}</TableCell>
                        <TableCell>{s.uniqueValues ?? '-'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>

              {numericColumns.length > 0 && numericColumn && (
                <div className="space-y-2">
                  <div className="w-48">
                    <Select
                      value={selectedNumeric ?? undefined}
                      onValueChange={setSelectedNumeric}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select column" />
                      </SelectTrigger>
                      <SelectContent>
                        {numericColumns.map((col) => (
                          <SelectItem key={col} value={col}>
                            {col}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="h-64">
                    <h2 className="font-semibold mb-2">{`Bar Chart: ${numericColumn.column}`}</h2>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={numericChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="index" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {categoricalColumns.length > 0 && categoricalColumn && (
                <div className="space-y-2">
                  <div className="w-48">
                    <Select
                      value={selectedCategorical ?? undefined}
                      onValueChange={setSelectedCategorical}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select column" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoricalColumns.map((col) => (
                          <SelectItem key={col} value={col}>
                            {col}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="h-64">
                    <h2 className="font-semibold mb-2">{`Pie Chart: ${categoricalColumn.column}`}</h2>
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Tooltip />
                        <Legend content={ScrollableLegend} />
                        <Pie data={categoricalChartData} dataKey="value" nameKey="name" outerRadius={80}>
                          {categoricalChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
