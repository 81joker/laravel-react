import { Link } from "@inertiajs/react"
export default function Pagination ({ links }) {
    return (
        <nav className="text-center mt-4">
    {links.map(link => (
        <Link 
        key={link.label}
        href={link.url || ""}
        method={link.method}
        preserveScroll
        className={"py-2 px-3 inline-block text-gray-200 rounded-lg text-xs "  + (link.active ? "bg-gray-950 text-white " : "") + (!link.url ? "!text-gray-500 coursor-not-allowed" : "hover:bg-gray-950")}
        dangerouslySetInnerHTML={{__html: link.label}}
        >
          
        </Link>
    ))}
        </nav>
    //     <nav className="flex items-center justify-between px-4 py-3 sm:px-6" aria-label="Pagination">
    //         <div className="hidden sm:block">
    //             <p className="text-sm text-gray-700 dark:text-gray-400">
    //                 Showing <span className="font-medium">{links.from}</span> to <span className="font-medium">{links.to}</span> of{' '}
    //                 <span className="font-medium">{links.total}</span> results
    //             </p>
    //         </div>
    //         <div className="flex justify-between sm:justify-end">
    //             {links.map((link) => (
    //                 <a key={link.label} href={link.url} className={`px-4 py-2 text-sm font-medium ${link.active ? 'bg-blue-500 text-white' : 'text-blue-600 hover:bg-blue-100'}`}>
    //                     {link.label}
    //                 </a>
    //             ))}
    //         </div>
    //     </nav>
    );
 
}