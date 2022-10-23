import React, {useEffect, useState} from 'react';
import obc from './Users.module.css';

type propsFromUsersContainer = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export const Paginator = (props: propsFromUsersContainer) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let portionSize = 10
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => setPortionNumber(Math.ceil(props.currentPage / portionSize)),
        [props.currentPage]);

    return (
        <div className={obc.pageSelectorDIV}>
            {portionNumber > 1 &&
                <button onClick={() => (setPortionNumber(portionNumber - 1))}>PREV</button>}

            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return (
                            <span key={p}
                                  className={props.currentPage === p ? obc.activePageSelector : ''}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}> {p}</span>
                        )
                    })
            }
            {portionCount > portionNumber &&
                <button onClick={() => (setPortionNumber(portionNumber + 1))}>NEXT</button>}
        </div>)
}