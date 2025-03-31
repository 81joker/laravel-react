import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head ,usePage ,Link , router} from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import {PROJECT_STATUS_TEXT_MAP ,PROJECT_STATUS_CLASS_MAP } from "@/constants";
import SelectInput from "@/Components/SelectInput";
export default function Project({ projects , queryParams = null}) {
        const user = usePage().props.auth.user;
        // const isAdmin = user.role === 'admin';
        queryParams = queryParams || {};
        const searchFieldChanged = (name, value) => {
          if (value) {
            queryParams[name] = value;
          } else {
            delete queryParams[name];
          }
          // router.push({ path: '/project', query: queryParams });
          router.get(route('project.index'), queryParams);
          }

          const onKeyPress = (name, value) => {
            if (e.key !== "Enter") return;
            searchFieldChanged(name, value);
          }

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Project 
            <span className="text-sm text-gray-500">
                ({projects.length} {projects.length === 1 ? "project" : "projects"})
            </span>
            <span className="text-sm text-blue-500 pl-14">{user.name}</span>
        </h2>
      }
    >
      <Head title="Project" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              You're logged in!

              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap">
                    <th className="py-2 px-3">ID</th>
                    <th className="py-2 px-3">Image</th>
                    <th className="py-2 px-3">Name</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">create Date</th>
                    <th className="py-2 px-3">Du Date</th>
                    <th className="py-2 px-3">Created By</th>
                    <th className="py-2 px-3 text-right">Actions</th>
                  </tr>
                  <tr className="text-nowrap">
                    <th className="py-2 px-3">
                      <TextInput className="w-full" placeholder="Project Name"
                      defaultValue={queryParams.name || ''}
                      onBlur={ (e) => searchFieldChanged('name' , e.target.value) }
                      onKeyPress={ (e) => onKeyPress('name' , e.target.value) }
                      />
                    </th>
                    <th className="py-2 px-3">
                      <SelectInput
                      defaultValue={queryParams.status || ''}
                      onChange={ (e) => searchFieldChanged('status' , e.target.value) }
                      className="w-full">
                        <option value="">Select Status</option>
                        {Object.keys(PROJECT_STATUS_TEXT_MAP).map((key) => (
                          <option key={key} value={key}>
                            {PROJECT_STATUS_TEXT_MAP[key]}
                          </option>
                        ))}
                      </SelectInput>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
                  {projects.data.map((project) => (
                    <tr key={project.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                   <td className="px-3 py-2">{project.id}</td>
                   <td className="px-3 py-2"><img src={project.image_path} style={{ width: 60 }} /></td>
                   <td className="px-3 py-2">{project.name}</td>
                   <td className="px-3 py-2">
                    <span className={"text-white px-2 py-1 rounded "  + PROJECT_STATUS_CLASS_MAP[project.status] }>
                     {PROJECT_STATUS_TEXT_MAP[project.status]}
                    </span>
                     </td>
                   <td className="px-3 py-2 text-nowrap">{project.created_at}</td>
                   <td className="px-3 py-2 text-nowrap">{project.due_date}</td>
                   <td className="px-3 py-2">{project.createdBy.name}</td>
                   <td className="px-3 py-2">
                    <Link href="{route('project.edit' , project.id)}" className="font-medium text-blue-600 hover:text-blue-500 hover:underline mx-1">
                     Edit
                    </Link>
                    <Link href="{route('project.edit' , project.id)}" className="font-medium text-red-600 hover:text-red-500 hover:underline mx-1">
                     Delete
                    </Link>
                   </td>
   
                    </tr>
                  ))}
                </tbody>
              </table>

            <Pagination links={projects.meta.links} />  

            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

