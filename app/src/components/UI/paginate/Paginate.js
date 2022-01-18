import { usePagination } from "../../../hooks/usePagination";

export const Paginate = ({ totalPages, page, changePage }) => {
    const pagesArr = usePagination(totalPages);
    return (
        <div className='page__wrapper'>
            {pagesArr.map(p =>
                <span
                    onClick={() => changePage(p)}
                    className={page === p ? 'page page__current' : 'page'}
                    key={p}>
                    {p}
                </span>
            )}
        </div>
    )
}