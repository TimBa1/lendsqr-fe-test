import { usePagination, DOTS } from "./usePagination";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface Props {
	totalCount: number;
	currentPage: number;
	pageSize: number;
	lastPage?: number;
	onNext: (arg: number) => void;
	onPrev: (arg: number) => void;
	onSelect: (arg: number) => void;
	changeLimit: (arg: string) => void;
}

const Paginate = ({
	totalCount,
	currentPage,
	pageSize,
	onNext,
	onPrev,
	onSelect,
	changeLimit,
	lastPage
}: Props) => {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount: 1,
		pageSize,
	});

	return (
		<div className="pagination-filter">
			<div className="select">
				<select
					value={`${pageSize}`}
					onChange={(e) => changeLimit(e.target.value)}
				>
					<option value={"15"}>15</option>
					<option value={"30"}>30</option>
					<option value={"50"}>50</option>
					<option value={"100"}>100</option>
				</select>
				<span>entries per page</span>
			</div>

			<div className="main-pagination">
				{currentPage > 1 && (
					<button onClick={() => onPrev(currentPage - 1)}>
						<MdKeyboardArrowLeft /> Previous
					</button>
				)}
				{paginationRange &&
					paginationRange.map((p, i) => (
						<div className="keys" key={i + 1}>
							{p === DOTS ? (
								<span>---</span>
							) : (
								<button
									className={
										p === currentPage ? "active" : ""
									}
									onClick={() => onSelect(p)}
								>
									{p}
								</button>
							)}
						</div>
					))}
					{lastPage !== currentPage &&
				<button onClick={() => onNext(currentPage + 1)}>
					Next <MdKeyboardArrowRight />
				</button>}
			</div>
			<div className="infos">
				<p>
					{totalCount} {totalCount > 1 ? "entries" : "entry"}
				</p>
			</div>
		</div>
	);
};

export default Paginate;
