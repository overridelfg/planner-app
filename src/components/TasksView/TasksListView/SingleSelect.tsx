import { useOutside } from "@/hooks/useOutside";
import { X } from "lucide-react";
import { useUpdateTask } from "../hooks/useUpdateTask";

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
      className="relative min-w-36"
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <button type="button" onClick={() => setIsShow(!isShow)}>
        {value ? value : "Click for select"}
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
          className="absolute p-2.5 bg-sidebar z-10 shadow rounded-sm -left-0 cursor-pointer"
          style={{ top: "calc(100% + .7rem)" }}
        >
          {data.map((value) => {
            return (
              <div
                key={value.value}
                onClick={() => {
                  setIsShow(false);
                  onChange(value.value);
                }}
              >
                {value.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SingleSelect;
