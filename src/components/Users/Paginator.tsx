import React from 'react';
import obc from './Users.module.css';

type propsFromUsersContainer = {
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}


export const Paginator = (props: propsFromUsersContainer) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

        let filteredPages = pages.filter(p => (p <= 50))
        return (
            <div className={obc.pageSelectorDIV}>
                {
                    filteredPages.map((p) => {
                        return (
                            <span key={p}
                                  className={props.currentPage === p ? obc.activePageSelector : ''}
                                  onClick={(e) => {
                                      props.onPageChanged(p)
                                  }}>{p}</span>
                        )
                    })
                }
            </div>)

}