import React, {useEffect, useState} from 'react';
import obc from './Paginator.module.css';
import {setCurrentPage} from '../../redux/users-reducer';
import {useDispatch} from 'react-redux';

type FromUsersContainerType = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export const Paginator = React.memo((props: FromUsersContainerType) => {

    const dispatch = useDispatch()

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)
    let portionSize: number = 10
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber: number = (portionNumber - 1) * portionSize + 1
    let portionCount: number = Math.ceil(pagesCount / portionSize)
    let rightPortionPageNumber: number = portionNumber * portionSize

    useEffect(() => {
        setPortionNumber(Math.ceil(props.currentPage / portionSize))
    }, [ props.currentPage]
)
    ;

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
                                      dispatch(setCurrentPage(p))
                                  }}> {p}</span>
                        )
                    })
            }
            {portionCount > portionNumber &&
                <button onClick={() => {
                    (setPortionNumber(portionNumber + 1))
                }}>NEXT</button>}
        </div>)
})