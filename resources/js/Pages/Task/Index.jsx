import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head ,usePage } from "@inertiajs/react";

export default function Project({ tasks ,auth }) {
        const user = usePage().props.auth.user;
        // const isAdmin = user.role === 'admin';
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Tasks 
            <span className="text-sm text-gray-500">
                ({tasks.length} {tasks.length === 1 ? "task" : "tasks"})
            </span>
            <span className="text-sm text-blue-500 pl-14">{user.name}</span>
        </h2>
      }
    >
      <Head title="Tasks" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              You're logged in!
              <div className="mt-4 ">
                <ul className="space-y-4">
                  {tasks.map((task) => (
                    <li
                      key={task.id}
                      className="border p-4 rounded-lg shadow-md bg-blue-200 hover:bg-blue-300 transition duration-200"
                    >
                      <h3 className="text-xl font-semibold">{task.title}</h3>
                      <p className="text-gray-600">{task.description}</p>
                      <span
                        className={`px-2 py-1 text-sm rounded-lg ${
                          task.status === "Completed"
                            ? "bg-green-200 text-green-700"
                            : task.status === "In Progress"
                            ? "bg-blue-200 text-blue-700"
                            : "bg-yellow-200 text-yellow-700"
                        }`}
                      >
                        {task.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
