import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData?.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-96 overflow-auto text-white">
      {/* Header Row */}
      <div className="bg-gray-800 mb-4 py-2 px-4 flex justify-between rounded font-bold">
        <h2 className="w-1/5 text-center">Employee</h2>
        <h3 className="w-1/5 text-center">New Task</h3>
        <h5 className="w-1/5 text-center">Active Task</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

      {/* Dynamic Task Rows */}
      {authData?.employees?.map((elem, index) => (
        <div
          key={index}
          className="bg-gray-700 mb-2 py-2 px-4 flex justify-between rounded items-center"
        >
          <h2 className="w-1/5 text-center">{elem.firstName}</h2>
          <h3 className="w-1/5 text-center">{elem.taskCounts.newTask || "-"}</h3>
          <h5 className="w-1/5 text-center">{elem.taskCounts.active || "-"}</h5>
          <h5 className="w-1/5 text-center">{elem.taskCounts.completed || "-"}</h5>
          <h5 className="w-1/5 text-center">{elem.taskCounts.failed || "-"}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
