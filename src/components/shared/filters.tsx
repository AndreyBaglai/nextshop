import { cn } from "@/lib/utils";
import React from "react";
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from ".";
import { Input } from "../ui";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="A" value="1" />
        <FilterCheckbox text="News" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "text1", value: "1" },
          { text: "text2", value: "2" },
          { text: "text3", value: "3" },
          { text: "text4", value: "4" },
          { text: "text5", value: "5" },
          { text: "text6", value: "6" },
        ]}
        items={[
          { text: "text1", value: "1" },
          { text: "text2", value: "2" },
          { text: "text3", value: "3" },
          { text: "text4", value: "4" },
          { text: "text5", value: "5" },
          { text: "text6", value: "6" },
        ]}
      />
    </div>
  );
};
