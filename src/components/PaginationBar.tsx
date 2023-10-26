import Link from "next/link";

interface PaginationBarProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}


export default function PaginationBar({currentPage, totalPages}: PaginationBarProps){
    const maxPage = Math.min(totalPages, Math.max(currentPage + 4, 10));
    const minPage = Math.max(1, Math.min(currentPage - 4, totalPages - 9));

    const numberedPageItems: JSX.Element[] = []
    
    for(let page = minPage; page <= maxPage; page++){
        numberedPageItems.push(
            <Link
            href={"?page=" + page}
            key={page}
            className={`join-item btn ${currentPage === page ? "btn-active pointer-events-none" : ""
            }`}
            >
                {page}
            </Link>
        )

    }
//pagination bar:
    return(
        <div className="join">
            {numberedPageItems}
        </div>
    )
}