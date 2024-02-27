interface AddTaskButtonProps {}

const AddTaskButton: React.FC<AddTaskButtonProps> = () => {
  return (
    <div className="w-full bg-transparent p-3 border-b border-b-grey">
      <button className="italic opacity-40 text-sm">Add task...</button>
    </div>
  );
};

export default AddTaskButton;
