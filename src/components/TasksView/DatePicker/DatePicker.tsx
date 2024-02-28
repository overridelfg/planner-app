"use client";
import {
  ClassNames,
  DayPicker,
  SelectSingleEventHandler,
} from "react-day-picker";

import "react-day-picker/dist/style.css";

import "./DatePicker.scss";

import { useState } from "react";
import { useOutside } from "@/hooks/useOutside";

import dayjs, { type Dayjs } from "dayjs";

import { X } from "lucide-react";

import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

interface DatePickerProps {
  onChange: (value: string) => void;
  value: string;
  position?: "left" | "right";
}

const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  value,
  position = "left",
}) => {
  const [selected, setSelected] = useState<Date>();
  const { isShow, setIsShow, ref } = useOutside();

  const handleDaySelect: SelectSingleEventHandler = (date) => {
    const ISODate = date?.toISOString();

    setSelected(date);
    if (ISODate) {
      onChange(ISODate);
      setIsShow(false);
    } else {
      onChange("");
    }
  };

  return (
    <div className="relative" ref={ref as React.RefObject<HTMLDivElement>}>
      <button type="button" onClick={() => setIsShow(!isShow)}>
        {value ? dayjs(value).format("LL") : "Click for select"}
      </button>
      {value && (
        <button
          className="absolute -top-2 -right-4 opacity-30 hover:opacity-100 transition-opacity"
          onClick={() => {
            onChange("");
            setIsShow(false);
          }}
        >
          <X size={14} />
        </button>
      )}
      {isShow && (
        <div
          className={`absolute p-2.5 bg-sidebar z-10 shadow rounded-sm  ${position === 'left' ? '-left-[12rem]' : '-right-[12rem]'}`}
          style={{ top: "calc(100% + .7rem)" }}
        >
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={handleDaySelect}
            initialFocus={isShow}
            fromYear={2024}
            weekStartsOn={1}
            toYear={2034}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
