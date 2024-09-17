"use client";

import * as d3 from "d3";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function InsertionSort() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const [arraySize, setArraySize] = useState<number>(
    (Math.floor(Math.random() * 10) % 10) + 1
  );
  const [array, setArray] = useState<number[]>([]);
  const [arrayElements, setArrayElements] = useState<string>("");
  const [arrows, setArrows] = useState<{ from: number; to: number }[]>([]);

  // Effect to update the SVG whenever the array changes
  useEffect(() => {
    if (array.length > 0) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); // Clear previous elements

      // Create a color scale
      const colorScale = d3
        .scaleLinear<string>()
        .domain([d3.min(array)!, d3.max(array)!])
        .range(["lightblue", "steelblue"]);

      // Append rectangles for each array element
      svg
        .selectAll("rect")
        .data(array)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 42)
        .attr("y", 50)
        .attr("width", 36)
        .attr("height", 36)
        .attr("font-size", "16px")
        .attr("fill", (d) => colorScale(d));

      svg
        .selectAll("text")
        .data(array)
        .enter()
        .append("text")
        .attr("x", (d, i) => i * 42 + 16) // Center text horizontally
        .attr("y", 68) // Center text vertically
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text((d) => d);

      svg
        .selectAll("path")
        .data(arrows)
        .enter()
        .append("path")
        .attr("d", (d) => {
          const path = d3.path();
          const x1 = d.from * 42 + 16;
          const x2 = d.to * 42 + 16;
          const y = 90;
          const midX = (x1 + x2) / 2;
          const midY = y + 10; // Adjust the height of the curve
          path.moveTo(x1, y);
          path.quadraticCurveTo(midX, midY, x2, y);
          return path.toString();
        })
        .attr("stroke", "purple")
        .attr("stroke-width", 2)
        .attr("marker-end", "url(#arrowhead)");

      svg
        .append("defs")
        .append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 0 10 10")
        .attr("refX", 5)
        .attr("refY", 5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M 0 0 L 10 5 L 0 10 Z")
        .attr("fill", "purple");
    }
  }, [array, arrows]);

  const generateRandomArray = () => {
    const newArray = Array.from(
      { length: arraySize },
      () => Math.floor(Math.random() * 100) + 1
    );
    setArray(newArray);
    setArrayElements("[" + newArray.join(", ") + "]");
  };

  const insertionSort = async (arr: number[]) => {
    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const result = [...arr];

    for (let i = 1; i < result.length; i++) {
      let elem = result[i];
      let j = i - 1;

      while (j >= 0 && result[j] > elem) {
        result[j + 1] = result[j];
        setArrows([{ from: j, to: j + 1 }]);
        j--;
        setArray([...result]);
        await delay(500);
      }
      result[j + 1] = elem;
      setArrows([{ from: i, to: j + 1 }]);
      setArray([...result]);
      await delay(500);
    }
    setArrows([]);
  };

  const handleSort = () => {
    insertionSort(array);
  };

  useEffect(() => {
    generateRandomArray();
  }, []);

  return (
    <main className="px-4 py-8 space-y-4">
      <h1 className="text-3xl lg:text-4xl text-center">Insertion Sort</h1>

      <div className="flex flex-row justify-between px-4 h-screen">
        <svg ref={svgRef} className="w-1/2"></svg>
        <div className="flex flex-col gap-4 items-center">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="array-size">Array Size</Label>
            <Input
              id="array-size"
              min={1}
              max={20}
              value={arraySize}
              onChange={(e) => setArraySize(Number(e.target.value))}
              className="bg-foreground/10"
            />
            <Button
              className="bg-melikechan-pink dark:bg-melikechan-purple"
              onClick={generateRandomArray}
            >
              Generate Random Array
            </Button>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="array-elements">Array Elements</Label>
            <Input
              id="array-elements"
              value={arrayElements}
              className="bg-foreground/10"
            />
          </div>
          <Button
            className="bg-melikechan-pink dark:bg-melikechan-purple"
            onClick={handleSort}
          >
            Run
          </Button>
        </div>
      </div>
    </main>
  );
}
