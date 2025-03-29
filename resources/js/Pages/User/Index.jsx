import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function User({users}) {
        // const user = usePage().props.auth.user;
    
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    User
                    <span className="text-sm text-gray-500">
                    ({users.length} {users.length === 1 ? "user" : "users"})
                   </span>
                </h2>
            }
        >
            <Head title="User" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                              {users.map((user) => (
                                <div
                                    key={user.id}
                                    className="border p-4 rounded-lg shadow-md bg-blue-200 hover:bg-blue-300 transition duration-200"
                                >
                                    <h3 className="text-xl font-semibold">{user.name}</h3>
                                    <p className="text-gray-600">{user.email}</p>
                                    <span
                                        className={`px-2 py-1 text-sm rounded-lg ${
                                            user.role === "admin"
                                                ? "bg-green-200 text-green-700"
                                                : "bg-yellow-200 text-yellow-700"
                                        }`}
                                    >
                                        Role
                                    </span>
                                </div>))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
