"use client"
import { useOutside } from "@/hooks/useOutside";
import { X } from "lucide-react";
import { useUpdateTask } from "../TasksView/hooks/useUpdateTask";
import Badge from "@/components/Badge/Badge";

export interface IOption {
  value: string;
  label: string;
}

interface SingleSelectProps {
  data: IOption[];
  onChange: (value: string) => void;
  value: string | undefined;
  isColorSelect?: boolean;
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  data,
  onChange,
  value,
  isColorSelect,
}) => {
  const { isShow, setIsShow, ref } = useOutside();

  return (
    <div
      className="relative min-w-36 flex self-start p-2"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <button onClick={() => setIsShow(!isShow)} type="button">
        <Badge color={value || ''} style = {isColorSelect ? {backgroundColor: value} : {}}>
         {value ? value : "Click for select"}
        </Badge>
      </button>
      {value && (
        <button
          type="button"
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
          className="absolute p-2.5 bg-sidebar z-10 shadow rounded-sm -left-0 cursor-pointer"
          style={{ top: "calc(100% + .7rem)" }}
        >
          {data.map((value) => {
            return (
              <div
                className="flex flex-col gap-3 p-2"
                key={value.value}
                onClick={() => {
                  setIsShow(false);
                  onChange(value.value);
                }}
              >
                <Badge color={value.value || ''}
                style = {isColorSelect ? {backgroundColor: value.value} : {}}>
                  {value.label}
                </Badge>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SingleSelect;
