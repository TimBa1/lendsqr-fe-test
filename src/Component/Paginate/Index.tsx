 
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import usePagination, { DOTS } from "./usePagination";


interface props {
  itemsPerPage: number;
  totalItems: number;
  paginate: any;
  currentPage: number;
  changeLimit: (arg: string) => void;
  onNext: (arg: number) => void;
     onPrev: (arg: number) => void;
     onSelect: (arg: number) => void;
}

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  changeLimit,
  onNext,
   onPrev,
   onSelect,
}: props) => {

	const pageNumbers = usePagination({ totalItems, itemsPerPage, currentPage });

  return (
    <div className="pagination-filter">
       <div className="select">
        <span>Showing</span>
         <select
           value={`${itemsPerPage}`}
           onChange={(e) => changeLimit(e.target.value)}
         >
           <option value={"50"}>50</option>
           <option value={"100"}>100</option>
        </select>
        <span>out of {"500"}</span>
      </div>
	  <div className="main-pagination">
           <button onClick={() => onPrev(currentPage - 1)} disabled={currentPage === 1}>
           <div className={currentPage !==1 ?"active box-page":"box-page"}><MdKeyboardArrowLeft /></div>
           </button>
         {pageNumbers &&
           pageNumbers.map((p:any, i:any) => (
             <div className="keys" key={i - 1}>
               {p.toString() === DOTS ? (
                <span>---</span>
              ) : (
                 <button
                   className={p === currentPage ? "active" : ""}
                   onClick={() => onSelect(p)}
                 >
                 {p}
                </button>
               )}
             </div>
           ))}
         
           <button onClick={() => onNext(currentPage + 1)} disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}>
 			<div className={currentPage === Math.ceil(totalItems / itemsPerPage) ?"active box-page":"box-page"}><MdKeyboardArrowRight /></div>

           </button>
       </div>
    </div>
  );
};

export default Pagination;
