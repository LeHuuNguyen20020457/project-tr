import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import '../../../style/pagination.scss';
import classnames from 'classnames';

type IPagination = {
    onPageChange: (page: number) => React.Dispatch<React.SetStateAction<number>>;
    siblingCount: number;
    currentPage: number;
    totalPageCount: number;
    className: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Pagination = (props: any) => {
    const { onPageChange, siblingCount = 1, currentPage, totalPageCount, className } = props;

    const paginationRange = usePagination({
        currentPage,
        totalPageCount,
        siblingCount,
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul className={classnames('pagination-container', { [className]: className })}>
            {/* Left navigation arrow */}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === 1,
                })}
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange.map((pageNumber, index) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li key={index} className="pagination-item dots">
                            &#8230;
                        </li>
                    );
                }

                // Render our Page Pills
                return (
                    <li
                        key={index}
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber as number)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;
