import React from 'react'


const Pagination = ({currentPage, itemsPerPage, length, onPageChanged}) => {
    const pagesCount = Math.ceil(length / itemsPerPage);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return ( 
        <div className="flex flex-col items-center my-12">
            <div className="flex text-gray-700">
                <button onClick={() => onPageChanged(currentPage - 1)} className={((currentPage === 1) ? " disabled:opacity-20" : "")} disabled={(currentPage === 1) ? " disabled:opacity-20" : ""}>
                    <div className={"h-8 w-8 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer "}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"feather feather-chevron-left w-4 h-4" + ((currentPage === 1) ? " disabled:opacity-20" : "")} >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                </button>
                <div className="flex h-8 font-medium rounded-full bg-gray-200">
                    {pages.map(page => <div key={page} className={"w-8 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full" + ((currentPage === page) ? "rounded-fullactive bg-green-500" : "bg-yellow-700")}>
                        <button onClick={() => onPageChanged(page)}>{page}</button>
                    </div>
                    )}
                </div>
                <button onClick={() => onPageChanged(currentPage + 1)} className={((currentPage === pagesCount) ? " disabled:opacity-50" : "")} disabled={((currentPage === pagesCount) ? " disabled:opacity-20" : "")}>
                    <div className={"h-8 w-8 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer " }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"feather feather-chevron-right w-4 h-4" + ((currentPage === pagesCount) ? " disabled:opacity-20" : "")}>
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
}

Pagination.getData = (items, currentPage, itemsPerPage) => {
    const start = currentPage * itemsPerPage - itemsPerPage;
    return items.slice(start, start + itemsPerPage);
}
export default Pagination;