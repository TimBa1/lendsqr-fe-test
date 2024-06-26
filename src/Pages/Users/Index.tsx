import React, { useState } from 'react'
import icon1 from '../../Assets/icon.svg'
import icon2 from '../../Assets/icon (1).svg'
import icon3 from '../../Assets/icon (2).svg'
import icon4 from '../../Assets/icon (3).svg'

function Users() {
    const [load, setLoad] = useState(false);
    const [list, setList] = useState<any>({});

    //FILTERS
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(25);

  return (
    <div className='users'>
        <div className='title'>Users</div>
        <div className='box'>
            <div className='box-container'>
                <img src={icon1} alt='icon'/>
                <h3>{'users'}</h3>
                <h2>{'2,456'}</h2>
            </div>
            <div className='box-container'>
                <img src={icon2} alt='icon'/>
                <h3>Active Users</h3>
                <h2>{'2,456'}</h2>
            </div>
            <div className='box-container'>
                <img src={icon3} alt='icon'/>
                <h3>Users with Loans</h3>
                <h2>12,400</h2>
            </div>
            <div className='box-container'>
                <img src={icon4} alt='icon'/>
                <h3>Users with Savings</h3>
                <h2>102,400</h2>
            </div>
        </div>

        <div className="table-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>User</th>
                                        <th>Account Number</th>
                                        <th>payout date</th>
                                        <th>Interest paid (NGN)</th>
                                    </tr>
                                </thead>
                                {!load && list?.data?.length > 0 && (
                                    <tbody>
                                        {list?.data?.map(
                                            (tr: any, i: number) => (
                                                <tr key={tr.id}>
                                                    <td>
                                                        {limit * (page - 1) +
                                                            i +
                                                            1}
                                                    </td>
                                                    <td>{tr.user_id}</td>
                                                    <td>{tr.account_number}</td>

                                                    <td>
                                                        {dateFormat(
                                                            tr.createdAt,
                                                            'mmm dd, yyyy | h:MM TT',
                                                        )}
                                                    </td>
                                                    <td>{tr.interest_paid}</td>
                                                </tr>
                                            ),
                                        )}
                                    </tbody>
                                )}
                            </table>
                        </div>
                        {!load && list?.meta?.last_page > 1 && (
                            <Paginate
                                currentPage={page}
                                totalCount={list?.meta?.total}
                                pageSize={limit}
                                lastPage={list?.meta?.last_page}
                                onSelect={(p: number) => setPage(Number(p))}
                                onNext={(p: number) => setPage(p)}
                                onPrev={(p: number) => setPage(p)}
                                changeLimit={(p: string) => setLimit(Number(p))}
                            />
                        )}
                        {load && <LoadTable />}
                    </div>
    </div>
  )
}

export default Users